<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BlocksController extends Controller
{
    function setBlock($sender_id,$blocked_id){
        DB::table('blocks')->insert([
            'sender_id' => $sender_id,
            'blocked_id' => $blocked_id,
        ]);
                return response()->json([
            "status"=>'User Blocked'
        ]);
    }

    function getBlock($sender_id){
        $block=Blocks::find($sender_id);
        return response()->json([
            'blocks'=>$block
        ]);
    }
    function noteBlock($sender_id,$block_id){
        
    }

}
