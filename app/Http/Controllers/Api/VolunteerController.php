<?php

namespace App\Http\Controllers\Api;

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
            if ($request->get("all", false) == true)
                $volunteer->load('user', 'educations', 'experiences', 'capabilities');
            //return $volunteer;
            return response()->json($volunteer);
        }
        return response()->json(["error"], 401);
    }

    public function show($user, Request $request)
    {
        $user = User::findOrFail($user);
        if (!is_null($user->volunteer)) {
            $user->volunteer->load('user');
            if ($request->get("all", false) == true) {
                $user->volunteer->load(['educations', 'experiences', "capabilities"]);
            }
            return $user->volunteer;
        }
    }
}
