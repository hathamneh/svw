<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Volunteer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchController extends Controller
{

    public function show(Request $request) {
        $type = "volunteer";
        if($request->has("type") && in_array($request->get("type"), ['volunteer','organization','event']))
            $type = $request->get("type");

        $query = self::escapeLike($request->get("s"));
        switch ($type) {
            case "volunteer":
                $results = Volunteer::where("first_name", "LIKE", "%$query%")
                        ->orWhere("last_name", "LIKE", "%$query%")
                        ->with("user")
                        ->get();
                return $results;
                break;
        }

        return [];
    }

    public static function escapeLike($str) {
        return str_replace(['\\', '%', '_'], ['\\\\', '\%', '\_'], $str);
    }
}
