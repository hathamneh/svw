<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Volunteer;
use Illuminate\Http\Request;

class SearchController extends Controller
{

    public function show(Request $request) {
        $type = "volunteer";
        if($request->has("type") && in_array($request->get("type"), ['volunteer','organization','event']))
            $type = $request->get("type");

        $query = $request->get("s");
        switch ($type) {
            case "volunteer":
                $results = Volunteer::where("first_name", "LIKE", "%$query%")
                        ->orWhere("last_name", "LIKE", "%$query%")
                        ->with("user")
                        ->get();
                return $results;
                break;
        }
    }
}
