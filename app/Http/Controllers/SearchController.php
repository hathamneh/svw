<?php

namespace App\Http\Controllers;

use App\Event;
use App\Organization;
use App\User;
use App\Volunteer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SearchController extends Controller
{

    public function show(Request $request)
    {
        $s = $request->get("s", false);
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
            'isSearch'  => true
        ]);
    }

    public static function escapeLike($str)
    {
        return str_replace(['\\', '%', '_'], ['\\\\', '\%', '\_'], $str);
    }

    public function doSearch($s, $type = "volunteer")
    {
        if (!$s || empty($s))
            return collect([]);
        $query = self::escapeLike($s);
        switch ($type) {
            case "event":
                return Event::search($query);
            case "organization":
                return Organization::search($query);
            case "volunteer":
                return Volunteer::search($query);
            default:
                return Volunteer::search($query);
//                return [
//                    "volunteers" => Volunteer::search($query),
//                    "organizations" => Organization::search($query),
//                    "events" => Event::search($query),
//                ];
        }
    }
}
