<?php

return [
    "fake_user_agent" => env("HKLIST_FAKE_USER_AGENT", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"),
    "fake_wx_user_agent" => env("HKLIST_FAKE_WX_USER_AGENT", "Mozilla/5.0 (Linux; Android 7.1.1; MI 6 Build/NMF26X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/043807 Mobile Safari/537.36 MicroMessenger/6.6.1.1220(0x26060135) NetType/4G Language/zh_CN MicroMessenger/6.6.1.1220(0x26060135) NetType/4G Language/zh_CN miniProgram"),
    "fake_cookie" => env("HKLIST_FAKE_COOKIE", "BAIDUID=A4FDFAE43DDBF7E6956B02F6EF715373:FG=1; BAIDUID_BFESS=A4FDFAE43DDBF7E6956B02F6EF715373:FG=1; newlogin=1"),

    "version" => "2.0.6",

    "general" => [
        "admin_password" => env("HKLIST_ADMIN_PASSWORD", ""),
        "parse_password" => env("HKLIST_PARSE_PASSWORD", ""),
        "show_announce" => (bool)env("HKLIST_SHOW_ANNOUNCE", true),
        "announce" => htmlspecialchars_decode(str_replace("[NextLine]", "\n", env("HKLIST_ANNOUNCE", ""))),
        "custom_button" => str_replace("[NextLine]", "\n", env("HKLIST_CUSTOM_BUTTON", "")),
        "show_hero" => (bool)env("HKLIST_SHOW_HERO", false),
        "name" => env("APP_NAME", "HkList"),
        "logo" => env("APP_LOGO", "/favicon.ico"),
        'debug' => env("APP_DEBUG", false),
    ],
    "limit" => [
        "max_once" => (float)env("HKLIST_MAX_ONCE", 5),
        "min_single_filesize" => (float)env("HKLIST_MIN_SINGLE_FILESIZE", 0),
        "max_single_filesize" => (float)env("HKLIST_MAX_SINGLE_FILESIZE", 53687091200),
        "max_download_daily_pre_account" => (float)env("HKLIST_MAX_DOWNLOAD_DAILY_PRE_ACCOUNT", 0),
        "limit_cn" => (bool)env("HKLIST_LIMIT_CN", true),
        "limit_prov" => (bool)env("HKLIST_LIMIT_PROV", false),
    ],
    "parse" => [
        "parser_server" => env("HKLIST_PARSER_SERVER", ""),
        "parser_password" => env("HKLIST_PARSER_PASSWORD", ""),
        "parse_mode" => (int)env("HKLIST_PARSE_MODE", 1),
        "user_agent" => env("HKLIST_USER_AGENT", ""),
        "use_exploit" => env("HKLIST_USE_EXPLOIT", false),
    ]
];
