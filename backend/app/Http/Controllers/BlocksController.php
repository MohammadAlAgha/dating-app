<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Blocks;

class BlocksController extends Controller
{
        public function setBlock(Request $request){
            $block = Blocks::create([
                "sender_id" => $request->sender_id,
                "blocked_id" => $request->blocked_id
            ]);
        
            return response()->json([
                "status"=>'User is blocked'
            ]);
        }

    function getBlock(Request $request){
        $block=Blocks::where("sender_id",$request->sender_id)
                        ->get();

        return response()->json([
            'blocks'=>$block
        ]);
    }
    function noteBlock($sender_id,$block_id){
        
    }

}
