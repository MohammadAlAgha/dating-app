<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class BlocksController extends Controller
{
        public function setBlock(Request $request){
            $sender_id = $request->input('sender_id');
            $blocked_id = $request->input('blocked_id');
            $data=array('sender_id'=>$sender_id,"blocked_id"=>$blocked_id);
            DB::table('blocks')->insert($data);
        
            return response()->json([
                "status"=>'User is blocked'
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
