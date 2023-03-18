<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Blocks;

class BlocksController extends Controller
{
        public function setBlock(Request $request){
            $sender_id=$request->sender_id;
            $blocked_id=$request->blocked_id;

            $block=Blocks::where('sender_id',$sender_id)
            ->where('blocked_id',$blocked_id)
            ->get();

            if($block->count()==0){
                $block=Blocks::create([
                    "sender_id"=>$sender_id,
                    "blocked_id"=>$blocked_id
                ]);
                return response()->json([
                    'state'=>'User is Blocked'
                ]);
                $block->save();            
            }
            else{
                Blocks::where('sender_id',$sender_id)
            ->where('blocked_id',$blocked_id)
            ->delete();
                return response()->json([
                    'state'=>'User is unblocked'
                ]);
            
            }
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
