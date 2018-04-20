<?php

namespace App\Http\Controllers\Api;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class FollowController extends Controller
{
    public function followUser(Request $request)
    {
        try {
            if (!$request->has("user_id"))
                throw new \ArgumentCountError("Please provide user id.");

            /** @var User $follower */
            $follower = Auth::user();
            $user = User::findOrFail($request->get("user_id"));
            $follower->following()->attach($user);
            return response()->json(["followed" => true]);
        } catch (\Exception $ex) {
            return response()->json(["followed" => false], 500);
        }
    }

    public function unfollowUser(Request $request)
    {
        try {
            if (!$request->has("user_id"))
                throw new \ArgumentCountError("Please provide user id.");

            /** @var User $follower */
            $follower = Auth::user();
            $user = User::findOrFail($request->get("user_id"));
            $follower->following()->detach($user);
            return response()->json(["unfollowed" => true]);
        } catch (\Exception $ex) {
            return response()->json(["unfollowed" => false], 500);
        }
    }

    public function getFollowers(User $user = null, Request $request)
    {
        if (is_null($user))
            $user = Auth::user();
        $followers = $user->followers;
        return $request->has("count") ? ["followers" => $followers->count()] : $followers;
    }

    public function getFollowing(User $user = null, Request $request)
    {
        if (is_null($user))
            $user = Auth::user();
        $following = $user->following;
        return $request->has("count") ? ["following" => $following->count()] : $following;
    }

    public function getNumbers(User $user = null)
    {
        if (is_null($user))
            $user = Auth::user();
        $following = $user->following;
        $out = ["following" => $following->count()];
        $followers = $user->followers;
        $out += ["followers" => $followers->count()];

        if ($user->is_org) {
            $out += ['events' => $user->organization->eventsCount()];
        } else {
            $out += ['memberOf' => $user->memberOf->count()];
        }

        return $out;
    }

    public function isFollowing(User $user)
    {
        try {
            /** @var User $follower */
            $follower = Auth::user();
            if ($user->is_org)
                $check = !is_null($follower->memberOf->find($user));
            else
                $check = !is_null($follower->following->find($user));
            return response()->json(["followed" => $check]);
        } catch (\Exception $ex) {
            return self::jsonException($ex);
        }
    }
}
