<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Api\BDWPApiController;
use App\Http\Controllers\FreeParsers\V0Controller;
use App\Http\Controllers\Parsers\V1Controller;
use App\Http\Controllers\Parsers\V2Controller;
use App\Http\Controllers\Parsers\V3Controller;
use App\Http\Controllers\Parsers\V4Controller;
use App\Http\Controllers\Parsers\V5Controller;
use App\Http\Controllers\Parsers\V6Controller;
use App\Models\Account;
use App\Models\FileList;
use App\Models\Record;
use App\Models\Token;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class ParseController extends Controller
{
    public static function getConfig(Request $request)
    {
        $config = config("hklist");
        return ResponseController::success([
            ...collect($config["general"])->only(["debug", "show_announce", "announce", "custom_button", "name", "logo", "show_hero"]),
            ...collect($config["limit"])->only(["max_once", "min_single_filesize", "max_single_filesize"]),
            "need_password" => $config["general"]["parse_password"] !== "",
            "have_account" => self::getRandomCookie($request)->getData(true)["code"] === 200,
        ]);
    }

    public function getLimit(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "token" => "required|string",
        ]);
        if ($validator->fails()) return ResponseController::paramsError($validator->errors());

        $token = Token::query()->firstWhere("token", $request["token"]);
        if (!$token) return ResponseController::TokenNotExists();
        $tokenArray = $token->toArray();

        if (!$token["switch"]) return ResponseController::tokenHasBeenBaned($token["reason"]);

        $recordsQuery = Record::query()->where("token_id", $token["id"]);

        // 判断游客
        if ($request["token"] === "guest") {
            // 绑定指纹,每日刷新
            $recordsQuery
                ->where("ip", UtilsController::getIp($request))
                ->whereDate("records.created_at", "=", now());
        } else {
            // 非游客
            if (!in_array(UtilsController::getIp($request), $token["ip"]) && count($token["ip"]) >= $token["can_use_ip_count"]) return ResponseController::TokenIpHitMax();

            // 检查是否已经过期
            if ($token["expires_at"] !== null && $token["expires_at"]->isPast()) return ResponseController::TokenExpired();
        }

        $records = $recordsQuery
            ->leftJoin("file_lists", "file_lists.id", "=", "records.fs_id")
            ->selectRaw("SUM(size) as size,COUNT(*) as count")
            ->first();

        if (
            $records["count"] >= $token["count"] ||
            $records["size"] >= $token["size"]
        ) {
            return ResponseController::TokenQuotaHasBeenUsedUp();
        }

        return ResponseController::success([
            "count" => $token["count"] - $records["count"],
            "size" => $token["size"] - $records["size"],
            "expires_at" => $tokenArray["expires_at"]
        ]);
    }

    public function getFileList(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "surl" => "required|string",
            "pwd" => "nullable|string",
            "dir" => "required|string",
            "page" => "nullable|numeric",
            "num" => "nullable|numeric",
            "order" => ["nullable", Rule::in(["time", "filename"])]
        ]);
        if ($validator->fails()) return ResponseController::paramsError($validator->errors());

        $fileList = BDWPApiController::getFileList($request["surl"], $request["pwd"], $request["dir"], $request["page"], $request["num"], $request["order"]);
        $fileListData = $fileList->getData(true);
        if ($fileListData["code"] !== 200) return $fileList;
        $fileListData = $fileListData["data"];

        foreach ($fileListData["list"] as $file) {
            if ($file["is_dir"]) continue;

            $find = FileList::query()->firstWhere([
                "surl" => $request["surl"],
                "pwd" => $request["pwd"],
                "fs_id" => $file["fs_id"]
            ]);

            if ($find) {
                $find->update([
                    "filename" => $file["server_filename"],
                    "size" => $file["size"],
                    "md5" => $file["md5"]
                ]);
            } else {
                FileList::query()->create([
                    "surl" => $request["surl"],
                    "pwd" => $request["pwd"],
                    "fs_id" => $file["fs_id"],
                    "size" => $file["size"],
                    "filename" => $file["server_filename"],
                ]);
            }
        }

        return ResponseController::success($fileListData);
    }

    public function getVcode()
    {
        return BDWPApiController::getVcode();
    }

    public static function getAccountType($parse_mode = null)
    {
        return match ($parse_mode ?? config("hklist.parse.parse_mode")) {
            // 正常模式
            0, 1, 2 => ResponseController::success(["account_type" => "cookie", "account_data" => ["vip_type" => "超级会员"]]),
            // 开放平台
            3, 4 => ResponseController::success(["account_type" => "open_platform", "account_data" => ["vip_type" => "超级会员"]]),
            // 企业平台
            5 => ResponseController::success(["account_type" => "enterprise_cookie", "account_data" => []]),
            // 下载卷接口
            6 => ResponseController::success(["account_type" => "download_ticket", "account_data" => []]),
            // 漏洞接口
            "exploit" => ResponseController::success(["account_type" => "cookie", "account_data" => ["vip_type" => "普通用户"]]),
            default => ResponseController::unknownParseMode()
        };
    }

    public static function getRandomCookie(Request $request, $makeNew = false, $lessThan100M = false)
    {
        $province = null;
        $limit_cn = config("hklist.limit.limit_cn");
        $limit_prov = config("hklist.limit.limit_prov");
        if ($limit_cn || $limit_prov) {
            $ip = UtilsController::getIp($request);
            $prov = UtilsController::getProvinces($ip);
            $provData = $prov->getData(true);
            if ($provData["code"] !== 200) return $prov;
            $provData = $provData["data"];

            if ($limit_cn && !$provData["isCn"]) return ResponseController::unsupportedCountry();
            if ($limit_prov) $province = $provData["province"];
        }

        $accountType = self::getAccountType($lessThan100M ? "exploit" : null);
        $accountTypeData = $accountType->getData(true);
        if ($accountTypeData["code"] !== 200) return $accountType;
        $accountTypeData = $accountTypeData["data"];

        // 解析模式需要超级会员
        $needPro = false;
        $account = Account::query()->where(["switch" => true, "account_type" => $accountTypeData["account_type"]]);
        if ($province !== null) {
            if ($makeNew) {
                $account = $account->whereNull("prov");
            } else {
                $account = $account->where("prov", $province);
            }
        }
        foreach ($accountTypeData["account_data"] as $key => $value) {
            if ($key === "vip_type" && $value === "超级会员") $needPro = true;
            $account = $account->where("account_data->" . $key, $value);
        }

        $max_download_daily_pre_account = config("hklist.limit.max_download_daily_pre_account");
        if ($max_download_daily_pre_account > 0) {
            $account = $account
                ->leftJoin("records", function ($join) {
                    $join->on("records.account_id", "=", "accounts.id")->whereDate("records.created_at", "=", now());
                })
                ->leftJoin("file_lists", function ($join) {
                    $join->on("file_lists.fs_id", "=", "records.fs_id");
                })
                ->select("accounts.*", DB::raw('IFNULL(SUM(file_lists.size), 0) as total_size'))
                ->groupBy([
                    "accounts.id",
                    "accounts.baidu_name",
                    "accounts.uk",
                    "accounts.account_type",
                    "accounts.account_data",
                    "accounts.switch",
                    "accounts.reason",
                    "accounts.prov",
                    "accounts.created_at",
                    "accounts.updated_at",
                    "accounts.deleted_at",
                ])
                ->having('total_size', '<', $max_download_daily_pre_account);
        }

        $account = $account->inRandomOrder()->first();

        if (!$account) {
            // 判断存不存在 prov
            // 如果有那么就判断有没有还没有分配 prov 的账号
            if ($province !== null && !$makeNew) {
                return self::getRandomCookie($request, true, $lessThan100M);
            } else {
                return ResponseController::accountIsNotEnough();
            }
        }

        // 判断账号是否需要续期
        $isExpired = self::refreshExpiredAccount($account, $needPro);
        $isExpiredData = $isExpired->getData(true);
        $isExpiredData = $isExpiredData["data"];
        // 过期了获取一个新账号
        if ($isExpiredData["isExpired"]) return self::getRandomCookie($request, false, $lessThan100M);

        if ($makeNew) $account->update(["prov" => $province]);

        return ResponseController::success($account);
    }

    private static function refreshExpiredAccount(Account $account, $needPro)
    {
        $account_type = $account["account_type"];
        $account_data = $account["account_data"];

        if ($account_type === "cookie" || $account_type === "enterprise_cookie") {
            // 忽略普通用户
            if ($account_data["vip_type"] === "普通用户") return ResponseController::success(["isExpired" => false]);
            $expires_at = Carbon::parse($account_data["expires_at"], config("app.timezone"));
            if (!$expires_at->isPast()) return ResponseController::success(["isExpired" => false]);
        } else if ($account_type === "open_platform") {
            $token_expires_at = Carbon::parse($account_data["token_expires_at"], config("app.timezone"));
            $expires_at = Carbon::parse($account_data["expires_at"], config("app.timezone"));
            if (!$token_expires_at->isPast() && !$expires_at->isPast()) return ResponseController::success(["isExpired" => false]);
        } else if ($account_type === "download_ticket") {
            // download_ticket 不校验是否过期
            return ResponseController::success(["isExpired" => false]);
        }

        $updateInfo = AccountController::updateInfo(new Request(), ["id" => [$account["id"]]]);
        $updateInfoData = $updateInfo->getData(true);
        // 判断解析模式 需要是超级会员的模式
        if ($needPro) {
            // 判断账号现在的类型
            $newAccount = Account::query()->find($account["id"]);
            if ($newAccount["account_data"]["vip_type"] !== "超级会员") {
                $account->update(["switch" => false, "reason" => "会员过期"]);
                return ResponseController::success(["isExpired" => true]);
            }
        }

        if ($updateInfoData["code"] === 200) {
            $account->update(["switch" => false, "reason" => "账号过期"]);
            return ResponseController::success(["isExpired" => true]);
        }

        return ResponseController::success(["isExpired" => false]);
    }

    public function getDownloadLinks(Request $request)
    {
        set_time_limit(0);

        $validator = Validator::make($request->all(), [
            "randsk" => "required|string",
            "uk" => "required|numeric",
            "shareid" => "required|numeric",
            "fs_id" => "required|array",
            "fs_id.*" => "required|numeric",
            "surl" => "required|string",
            "dir" => "required|string",
            "pwd" => "nullable|string",
            "token" => "required|string",
            "vcode_str" => "nullable|string",
            "vcode_input" => "nullable|string"
        ]);
        if ($validator->fails()) return ResponseController::paramsError($validator->errors());

        // 每次请求不能超过多少个
        $max_once = config("hklist.limit.max_once");
        if (count($request["fs_id"]) > $max_once) return ResponseController::filesOverLoaded();

        // 检查限制还能不能解析
        $checkLimitRes = self::getLimit($request);
        $checkLimitData = $checkLimitRes->getData(true);
        if ($checkLimitData["code"] !== 200) return $checkLimitRes;
        $checkLimitData = $checkLimitData["data"];

        // 检查文件数量是否小于剩余配额
        if (count($request["fs_id"]) > $checkLimitData["count"]) return ResponseController::tokenQuotaCountIsNotEnough();

        // 检查链接是否有效
        $valid = self::getFileList($request);
        $validData = $valid->getData(true);
        if ($validData["code"] !== 200) return $valid;

        // 获取文件列表
        $fileList = FileList::query()
            ->where(["surl" => $request["surl"], "pwd" => $request["pwd"]])
            ->whereIn("fs_id", $request["fs_id"])
            ->get();

        // 神秘文件
        if ($fileList->count() !== count($request["fs_id"])) return ResponseController::unknownFsId();

        $min_filesize = config("hklist.limit.min_single_filesize");
        $max_filesize = config("hklist.limit.max_single_filesize");
        foreach ($fileList as $file) {
            if ($file["size"] < $min_filesize) return ResponseController::fileIsTooSmall();
            if ($file["size"] > $max_filesize) return ResponseController::fileIsTooBig();
        }

        // 检查文件总大小是否大于剩余配额
        if ($fileList->sum("size") > $checkLimitData["size"]) return ResponseController::tokenQuotaSizeIsNotEnough();

        $response = match (config("hklist.parse.parse_mode")) {
            0 => V0Controller::request($request),
            1 => V1Controller::request($request),
            2 => V2Controller::request($request),
            3 => V3Controller::request($request),
            4 => V4Controller::request($request),
            5 => V5Controller::request($request),
            6 => V6Controller::request($request),
            default => ResponseController::unknownParseMode()
        };
        $responseData = $response->getData(true);
        if ($responseData["code"] !== 200) return $response;
        $responseData = $responseData["data"];

        $token = Token::query()->firstWhere("token", $request["token"]);
        $ip = UtilsController::getIp($request);

        if ($token["token"] !== "guest") {
            if (!in_array($ip, $token["ip"])) {
                if (count($token["ip"]) >= $token["can_use_ip_count"]) return ResponseController::TokenIpHitMax();
                // 插入当前ip
                $token->update(["ip" => [$ip, ...$token["ip"]]]);
            }
            if ($token["expires_at"] === null) $token->update(["expires_at" => now()->addDays($token["day"])]);
        }

        $responseData = collect($responseData)->map(function ($item) use ($request, $token) {
            if ($item["message"] !== "请求成功") return $item;

            $isLimit = false;
            foreach ($item["urls"] as $url) {
                if (!str_contains($url, "tsl=0") || str_contains($url, "qdall")) $isLimit = true;
            }

            $item["urls"] = array_filter($item["urls"], fn($url) => !str_contains($url, "ant.baidu.com"));
            $item["urls"] = array_values($item["urls"]);

            Account::query()
                ->find($item["account_id"])
                ->update([
                    "switch" => !$isLimit,
                    "reason" => $isLimit ? "账号已限速" : ""
                ]);

            if ($isLimit) {
                $item["message"] = "下载链接已限速,推荐重新解析";
            } else {
                $fs_id = FileList::query()->firstWhere([
                    "surl" => $request["surl"],
                    "pwd" => $request["pwd"],
                    "fs_id" => $item["fs_id"]
                ]);
                // 插入记录
                Record::query()->create([
                    "ip" => UtilsController::getIp($request),
                    "fingerprint" => $request["rand2"],
                    "fs_id" => $fs_id["id"],
                    "urls" => $item["urls"],
                    "ua" => $item["ua"],
                    "token_id" => $token["id"],
                    "account_id" => $item["account_id"],
                ]);
            }

            unset($item["account_id"]);

            return $item;
        });

        return ResponseController::success($responseData);
    }
}
