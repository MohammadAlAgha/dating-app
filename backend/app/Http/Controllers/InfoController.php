<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Info;

class InfoController extends Controller
{
    function getInfo($user_id){
        $info=Info::where('user_id',$user_id)->get();
        return response()->json([
            'info'=>$info[0]
        ]);   
    }

    function profile(Request $request){
        $bio=$request->bio;
        $id=$request->id;
        $affected = Info::where('user_id', $id)
              ->update(['bio' => $bio]);

        return response()->json([
            'state'=>'Bio updated'
        ]);
        
    }
}
