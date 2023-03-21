<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Info extends Model
{
    protected $table = 'info';
    protected $fillable=[
        'user_id',
        'bio',
        'pic1',
        'pic2',
        'pic3'
        ];
}
