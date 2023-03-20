<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Favs;

class FavsController extends Controller
{
        public function setFav(Request $request){
            $sender_id = $request->sender_id;
            $fav_id = $request->fav_id;
            $fav = Favs::where("sender_id",$sender_id)
                        ->where("fav_id",$fav_id)
                        ->get();

            if($fav->count() == 0){
                $fav=Favs::create([
                    "sender_id"=>$sender_id,
                    "fav_id"=>$fav_id
                ]);

                $fav->save();

                return response()->json([
                    "status"=>'Saved in favourite'
                ]);
            } else {
                Favs::where("sender_id",$sender_id)
                    ->where("fav_id",$fav_id)
                    ->delete();

                return response()->json([
                    "status"=>'Deleted from favourite'
                ]);
            }

        
        }
    function getFav(Request $request){
        $favs=Favs::where("sender_id",$request->sender_id)
                        ->get();

        return response()->json([
            'favs'=>$favs
        ]);
    }
    function noteFav($sender_id,$fav_id){
    }

}

// }
