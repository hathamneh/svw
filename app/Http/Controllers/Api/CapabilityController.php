<?php

namespace App\Http\Controllers\Api;

use App\Capability;
use App\User;
use App\Volunteer;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class CapabilityController extends Controller
{
    public function index()
    {
        if(Auth::check() && !is_null($volunteer = Auth::user()->volunteer)) {
            /** Volunteer $volunteer */
            return Capability::groupify($volunteer->capabilities);
        }
        return response()->json(['error'], 401);
    }

    public function show(User $user)
    {
        try {
            if (!is_null($user) && !is_null($volunteer = $user->volunteer)) {
                /** @var Volunteer $volunteer */
                return Capability::groupify($volunteer->capabilities);
            }
            throw new ModelNotFoundException("User Not found");
        }
        catch (\Exception $e) {
            return $this->jsonException($e);
        }
    }
}
