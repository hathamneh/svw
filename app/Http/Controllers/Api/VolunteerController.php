<?php

namespace App\Http\Controllers\Api;

use App\Capability;
use App\Http\Controllers\Controller;
use App\Http\Resources\VolunteerCollection;
use App\User;
use App\Volunteer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class VolunteerController extends Controller
{
    public function index()
    {
        if (Auth::check() && !is_null($volunteer = Auth::user()->volunteer)) {
            /** @var Volunteer $volunteer */
            return new VolunteerCollection($volunteer);
        }
        return response()->json(["error"], 401);
    }

    public function show($user, Request $request)
    {
        $user = User::findOrFail($user);
        if (!is_null($volunteer = $user->volunteer)) {
            /** @var Volunteer $volunteer */

            return new VolunteerCollection($volunteer);
        }
        return response()->json(["error"], 500);
    }
}
