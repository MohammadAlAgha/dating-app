<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    function GetUser($id){
        $user = User::join('info', 'users.id', '=', 'info.user_id')
        ->get(['users.*', 'info.bio']);
        return response()->json([
            "user" => $user
        ]);
    }

    function GetUsers($id){
        $user = User::find($id);

        if($user->gender == "male"){
            $genderToFind = "female";
        }else{
             $genderToFind = "male";
        }

        $users = User::where('gender',$genderToFind)->get();

        return response()->json([
            "users" => $users
        ]);
    }
}

