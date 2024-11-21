<?php

namespace App\Http\Controllers;

use Exception;

class ResponseController extends Controller
{
    public static function response($code, $statusCode, $message, $data = null)
    {
        return response()->json(
            [
                "code" => $code,
                "message" => $message,
                "data" => $data
            ],
            $statusCode
        );
    }

    public static function success($data = null)
    {
        return self::response(200, 200, "请求成功", $data);
    }

    public static function networkError($actionName)
    {
        return self::response(20001, 500, "在执行 $actionName 时遇到服务器网络异常");
    }

    public static function requestError($actionName, $data = null)
    {
        return self::response(20002, 500, "在执行 $actionName 时服务器提示参数有问题", $data);
    }

    public static function requestServerError($actionName, $data = null)
    {
        return self::response(20003, 500, "在执行 $actionName 时服务器侧出现错误", $data);
    }

    public static function unknownError($actionName, Exception $exception)
    {
        return self::response(20004, 500, "在执行 $actionName 时服务器侧出现错误,错误信息: " . $exception->getMessage(), $exception);
    }

    public static function paramsError($errors)
    {
        return self::response(20005, 500, "参数错误", config("app.debug") ? ["errors" => $errors] : null);
    }

    public static function getAccountInfoFailed($errmsg = "未知")
    {
        return self::response(20006, 500, "获取账户信息失败,errmsg: $errmsg");
    }

    public static function getAccessTokenFailed($errmsg = "未知")
    {
        return self::response(20007, 500, "换取AccessToken失败,errmsg: $errmsg");
    }

    public static function getSvipAtFailed($errmsg = "未知")
    {
        return self::response(20008, 500, "获取svip到期时间失败,errmsg: $errmsg");
    }

    public static function getEnterpriseInfoFailed($errmsg = "未知")
    {
        return self::response(20009, 500, "获取企业账号信息失败,errmsg: $errmsg");
    }

    public static function getAccountAPLFailed($errmsg = "未知")
    {
        return self::response(20010, 500, "获取账号封禁状态失败,errmsg: $errmsg");
    }

    public static function getFileListFailed($errno = "未知", $errtype = "未知")
    {
        return self::response(20011, 500, "获取分享链接信息失败,errno: $errno, errtype: $errtype");
    }

    public static function getFileListMsgFailed($errmsg = "未知")
    {
        return self::response(20012, 500, "获取分享链接信息失败,errmsg: $errmsg");
    }

    public static function getVcodeFailed($errno = "未知")
    {
        return self::response(20013, 500, "获取验证码图片信息失败,errno: $errno");
    }

    public static function inBlackList()
    {
        return self::response(20014, 400, "处于黑名单中");
    }

    public static function installFailed($message)
    {
        return self::response(20015, 500, "安装失败,message: $message");
    }

    public static function wrongPass($role)
    {
        return self::response(20016, 400, "请检查 $role 密码是否正确");
    }

    public static function deleteFailed()
    {
        return self::response(20017, 400, "删除失败,请检查参数");
    }

    public static function updateFailed()
    {
        return self::response(20017, 400, "删除失败,请检查参数");
    }

    public static function getProvFailed($ip)
    {
        return self::response(20018, 500, "获取 $ip 所在的归属地失败");
    }

    public static function TokenNotExists()
    {
        return self::response(20019, 400, "token不存在");
    }

    public static function TokenIpHitMax()
    {
        return self::response(20020, 400, "token的可用ip数已到达限制");
    }

    public static function TokenExpired()
    {
        return self::response(20021, 400, "token已过期");
    }

    public static function TokenQuotaHasBeenUsedUp()
    {
        return self::response(20022, 400, "token可用容量已用完");
    }

    public static function parserServerNotDefined()
    {
        return self::response(20023, 400, "未完整配置解析服务器");
    }

    public static function mailServiceIsNotEnable()
    {
        return self::response(20024, 400, "未开启邮件服务");
    }

    public static function blackListExists()
    {
        return self::response(20025, 400, "该特征已存在");
    }

    public static function filesOverLoaded()
    {
        return self::response(20026, 400, "单次请求的文件过多");
    }

    public static function tokenQuotaCountIsNotEnough()
    {
        return self::response(20027, 400, "卡密剩余下载文件数不足");
    }

    public static function tokenQuotaSizeIsNotEnough()
    {
        return self::response(20028, 400, "卡密剩余下载文件大小不足");
    }

    public static function unknownFsId()
    {
        return self::response(20029, 400, "未记录的fs_id");
    }

    public static function fileIsTooSmall()
    {
        return self::response(20030, 400, "选择解析的文件过小");
    }

    public static function fileIsTooBig()
    {
        return self::response(20031, 400, "选择解析的文件过大");
    }

    public static function unknownParseMode()
    {
        return self::response(20031, 500, "未知解析模式");
    }

    public static function unsupportedCountry()
    {
        return self::response(20032, 400, "不支持的国家");
    }

    public static function accountIsNotEnough()
    {
        return self::response(20033, 500, "账号不足");
    }

    public static function unknownAccountType()
    {
        return self::response(20034, 500, "未知账号类型");
    }

    public static function saveToDiskFailed($errno = "未知", $errmsg = "未知")
    {
        return self::response(20035, 500, "保存到网盘失败,errno: $errno, errmsg: $errmsg");
    }

    public static function downloadByDiskFailed($errno = "未知", $errmsg = "未知")
    {
        return self::response(20036, 500, "下载盘内文件失败,errno: $errno, errmsg: $errmsg");
    }
}