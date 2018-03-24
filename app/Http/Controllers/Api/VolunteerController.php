<?php

namespace App\Http\Controllers\Api;

use App\Capability;
use App\Http\Controllers\Controller;
use App\User;
use App\Volunteer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class VolunteerController extends Controller
{
    public function index(Request $request)
    {
        if (Auth::check() && !is_null($volunteer = Auth::user()->volunteer)) {
            /** @var Volunteer $volunteer */
            $out = $volunteer->toArray();
            if ($request->get("all", false) == true) {
                $volunteer->load('educations', 'experiences');
                $out = $volunteer->toArray();
                $out['capabilities'] = Capability::groupify($volunteer->capabilities);
            }
            $out['user'] = $volunteer->user;
            return response()->json($out);
        }
        return response()->json(["error"], 401);
    }

    public function show($user, Request $request)
    {
        $user = User::findOrFail($user);
        if (!is_null($volunteer = $user->volunteer)) {
            /** @var Volunteer $volunteer */
            $out = $volunteer->toArray();
            if ($request->get("all", false) == true) {
                $volunteer->load('educations', 'experiences');
                $out = $volunteer->toArray();
                $out['capabilities'] = Capability::groupify($volunteer->capabilities);
            }
            $out['user'] = $volunteer->user;
            return response()->json($out);
        }
        return response()->json(["error"], 401);
    }
}
