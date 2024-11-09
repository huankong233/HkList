<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BlackList extends Model
{
    protected $fillable = [
        "type",
        "identifier",
        "reason",
        "expires_at"
    ];
}
