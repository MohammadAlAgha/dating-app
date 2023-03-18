<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Info;

class InfoController extends Controller
{
    function getInfo($id){
        $info=Info::find($id);
        return response()->json([
            'info'=>$info
        ]);   
    }
}
