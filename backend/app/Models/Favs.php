<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favs extends Model
{
    protected $fillable=[
    'sender_id',
    'fav_id'
    ];
}
