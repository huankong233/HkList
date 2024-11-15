<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Token extends Model
{
    public static array $attrs = [
        "id",
        "token",
        "count",
        "size",
        "day",
        "can_use_ip_count",
        "ip",
        "expires_at"
    ];

    protected $fillable = [
        "token",
        "count",
        "size",
        "day",
        "can_use_ip_count",
        "ip",
        "expires_at"
    ];

    protected function casts(): array
    {
        return [
            "ip" => "json",
            "expires_at" => "datetime",
        ];
    }
}
