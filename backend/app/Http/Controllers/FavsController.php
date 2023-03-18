<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Fav;



class FavsController extends Controller
{
        public function setFav(Request $request){
            $sender_id = $request->input('sender_id');
            $fav_id = $request->input('fav_id');
            $data=array('sender_id'=>$sender_id,"fav_id"=>$fav_id);
            DB::table('favs')->insert($data);
        
            return response()->json([
                "status"=>'Saved in favourite'
            ]);
        }
    }

    function getFav($sender_id){
        $fav=Favs::find($sender_id);
        return response()->json([
            'favs'=>$fav
        ]);
    }
    function noteFav($sender_id,$fav_id){

    }



// }
