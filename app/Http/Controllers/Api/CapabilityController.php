<?php

namespace App\Http\Controllers\Api;

use App\Capability;
use App\User;
use App\Volunteer;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\UnauthorizedException;
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
            elseif ($caps->has($type))
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
                elseif ($caps->has($type))
                    return $caps->get($type);
                else
                    return new RouteNotFoundException();
            }
            throw new ModelNotFoundException("User Not found");
        } catch (\Exception $e) {
            return $this->jsonException($e);
        }
    }

    public function store(User $user, Request $request)
    {
        try {
            if (!Auth::check() || Auth::user()->id != $user->id)
                throw new UnauthorizedException();
            /** @var Volunteer $volunteer */
            $volunteer = $user->volunteer;
            $newCapability = $volunteer->capabilities()->create([
                'type'  => $request->type,
                'value' => $request->value,
            ]);
            return $newCapability;

        } catch (\Exception $ex) {
            return $this->jsonException($ex);
        }
    }

    public function destroy(User $user, Capability $capability)
    {
        try{
            if (!Auth::check() || Auth::user()->id != $user->id)
                throw new UnauthorizedException();

            $capability->delete();

            return ["deleted" => true];

        } catch (\Exception $ex) {
            return $this->jsonException($ex);
        }
    }
}
