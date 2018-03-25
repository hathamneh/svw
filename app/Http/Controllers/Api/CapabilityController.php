<?php

namespace App\Http\Controllers\Api;

use App\Capability;
use App\User;
use App\Volunteer;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\Routing\Exception\RouteNotFoundException;

class CapabilityController extends Controller
{
    public function index($type = null)
    {
        if (Auth::check() && !is_null($volunteer = Auth::user()->volunteer)) {
            /** Volunteer $volunteer */
            $caps = Capability::groupify($volunteer->capabilities);;
            if (is_null($type))
                return $caps;
            elseif($caps->has($type))
                return $caps->get($type);
            else
                return $this->jsonException(new RouteNotFoundException());
        }
        return response()->json(['error'], 400);
    }

    public function show(User $user, $type = null)
    {
        try {
            if (!is_null($user) && !is_null($volunteer = $user->volunteer)) {
                /** @var Volunteer $volunteer */
                $caps = Capability::groupify($volunteer->capabilities);;
                if (is_null($type))
                    return $caps;
                elseif($caps->has($type))
                    return $caps->get($type);
                else
                    return new RouteNotFoundException();
            }
            throw new ModelNotFoundException("User Not found");
        } catch (\Exception $e) {
            return $this->jsonException($e);
        }
    }
}
