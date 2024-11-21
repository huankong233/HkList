<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\BlackListController;
use App\Http\Controllers\CheckPasswordController;
use App\Http\Controllers\Config\GeneralConfigController;
use App\Http\Controllers\Config\LimitConfigController;
use App\Http\Controllers\Config\MailConfigController;
use App\Http\Controllers\Config\ParseConfigController;
use App\Http\Controllers\InstallController;
use App\Http\Controllers\ParseController;
use App\Http\Controllers\TokenController;
use Illuminate\Support\Facades\Route;

Route::prefix("/v1")->group(function () {
    Route::post("/install", [InstallController::class, "install"]);

    Route::middleware(["IsInstall"])->group(function () {
        Route::prefix("/parse")->middleware(["IdentifierFilter"])->group(function () {
            Route::get("/config", [ParseController::class, "getConfig"]);
            Route::get("/limit", [ParseController::class, "getLimit"]);
            Route::middleware(["PassFilter:USER"])->group(function () {
                Route::post("/get_file_list", [ParseController::class, "getFileList"]);
                Route::post("/get_vcode", [ParseController::class, "getVcode"]);
                Route::post("/get_download_links", [ParseController::class, "getDownloadLinks"]);
            });
        });

        Route::post("/admin/check_password", [CheckPasswordController::class, "checkPassword"]);
        Route::prefix("/admin")->middleware(["PassFilter:ADMIN"])->group(function () {
            Route::prefix("/account")->group(function () {
                Route::get("/", [AccountController::class, "select"]);
                Route::post("/", [AccountController::class, "insert"]);
                Route::post("/update_info", [AccountController::class, "updateInfo"]);
                Route::post("/check_ban_status", [AccountController::class, "checkBanStatus"]);
                Route::patch("/", [AccountController::class, "update"]);
                Route::delete("/", [AccountController::class, "delete"]);
            });

            Route::prefix("/token")->group(function () {
                Route::get("/", [TokenController::class, "select"]);
                Route::post("/", [TokenController::class, "insert"]);
                Route::patch("/", [TokenController::class, "update"]);
                Route::delete("/", [TokenController::class, "delete"]);
            });

            Route::prefix("/black_list")->group(function () {
                Route::get("/", [BlackListController::class, "select"]);
                Route::post("/", [BlackListController::class, "insert"]);
                Route::patch("/", [BlackListController::class, "update"]);
                Route::delete("/", [BlackListController::class, "delete"]);
            });

            Route::prefix("/config")->group(function () {
                Route::prefix("/general")->group(function () {
                    Route::get("/", [GeneralConfigController::class, "getConfig"]);
                    Route::patch("/", [GeneralConfigController::class, "updateConfig"]);
                });
                Route::prefix("/limit")->group(function () {
                    Route::get("/", [LimitConfigController::class, "getConfig"]);
                    Route::patch("/", [LimitConfigController::class, "updateConfig"]);
                });
                Route::prefix("/parse")->group(function () {
                    Route::get("/", [ParseConfigController::class, "getConfig"]);
                    Route::patch("/", [ParseConfigController::class, "updateConfig"]);
                    Route::post("/test_auth", [ParseConfigController::class, "testAuth"]);
                });
                Route::prefix("/mail")->group(function () {
                    Route::get("/", [MailConfigController::class, "getConfig"]);
                    Route::patch("/", [MailConfigController::class, "updateConfig"]);
                    Route::post("/send_test_mail", [MailConfigController::class, "sendTestMail"]);
                });
            });
        });
    });
});