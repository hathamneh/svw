<?php

namespace App\Http\Controllers;

use App\Volunteer;
use Illuminate\Http\Request;

class SearchController extends Controller
{

    public function show($s, $type = "volunteer")
    {
        $results = $this->doSearch($s, $type);


    }

    public static function escapeLike($str)
    {
        return str_replace(['\\', '%', '_'], ['\\\\', '\%', '\_'], $str);
    }

    public function doSearch($s, $type = "volunteer")
    {
        $query = self::escapeLike($s);
        switch ($type) {
            case "event":
                return [];
            case "organization":
                return [];
            case "volunteer":
            default:
                return Volunteer::search($query);
        }
    }
}
