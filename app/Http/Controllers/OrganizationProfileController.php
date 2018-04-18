<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrganizationProfileController extends Controller
{
    public function show($username)
    {
        $user = User::where('username', $username)->first();
        $data = [];
        if (!is_null($user)) {
            $data['user'] = $user;
            $data['org'] = $user->organization;
            if (Auth()->user())
                if (Auth::user()->id == $user->id)
                    $data['view_mode'] = "self";
                else
                    $data['view_mode'] = "other";
            else
                $data['view_mode'] = "guest";

            return view("profile.organization")->with($data);
        } else
            return redirect("home");
    }

    public function edit($username)
    {
        $user = User::has("organization")->where('username', $username)->first();
        $organization = $user->organization;
        return view("profile.organization.edit")->with([
            "organization" => $organization,
            "user"      => $user,
        ]);
    }
}
