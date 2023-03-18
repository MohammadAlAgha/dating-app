<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    function GetUser($id){
            $user = User::find($id);
            return response()->json([
                "user" => $user
         ]);
    }
    function GetUsers(){
            $user = User::all();
            return response()->json([
                "user" => $user
         ]);
    }
}

