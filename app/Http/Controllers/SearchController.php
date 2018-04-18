<?php

namespace App\Http\Controllers;

use App\Organization;
use App\User;
use App\Volunteer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SearchController extends Controller
{

    public function show(Request $request)
    {
        $s = $request->get("s");
        $type = $request->get("type", "volunteer");
        $results = $this->doSearch($s, $type);
        /** @var User $user */
        $user = Auth::user();
        /** @var Volunteer $volunteer */
        $volunteer = !is_null($user) ? $user->volunteer : null;

        return view("search")->with([
            's'         => $s,
            'type'      => $type,
            'results'   => $results,
            'user'      => $user,
            'volunteer' => $volunteer,
        ]);
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
                return Organization::search($query);
            default:
                return Volunteer::search($query);
        }
    }
}
