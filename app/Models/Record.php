<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Record extends Model
{
    public static array $attrs = [
        "id",
        "ip",
        "fingerprint",
        "fs_id",
        "urls",
        "ua",
        "token_id",
        "account_id",
        "created_at",
        "updated_at",
    ];

    protected $fillable = [
        "ip",
        "fingerprint",
        "fs_id",
        "urls",
        "ua",
        "token_id",
        "account_id"
    ];

    protected function casts(): array
    {
        return [
            'urls' => "json"
        ];
    }
}
