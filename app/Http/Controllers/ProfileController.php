<?php

namespace App\Http\Controllers;

use App\User;
use App\Volunteer;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    public function show($username)
    {
        $user = User::where('username', $username)->first();
        $data = [];
        if (!is_null($user)) {
            $data['user'] = $user;
            $data['volunteer'] = $volunteer = $user->volunteer;
            if (is_null($volunteer))
                throw new ModelNotFoundException("Volunteer Not Found!");
            if (Auth()->user())
                if (Auth::user()->id == $user->id)
                    $data['view_mode'] = "self";
                else
                    $data['view_mode'] = "other";
            else
                $data['view_mode'] = "guest";

            return view("profile.volunteer.main")->with($data);
        } else
            throw new ModelNotFoundException("Volunteer Not Found!");
    }

    public function edit($username)
    {
        $user = User::has("volunteer")->where('username', $username)->first();
        $volunteer = $user->volunteer;
        return view("profile.volunteer.edit")->with([
            "volunteer" => $volunteer,
            "user"      => $user,
        ]);
    }

}
