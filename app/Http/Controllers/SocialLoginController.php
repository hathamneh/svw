<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

class SocialLoginController extends Controller
{
    public function redirect($service)
    {
        return Socialite::driver($service)->redirect();
    }

    public function callback($service)
    {
        $user = Socialite::with($service)->user();
        $existUser = User::where("email", $user->email)->orWhere(function($query) use ($service, $user) {
            $query->where("provider", $service)
                ->where("provider_id", $user->id);
        })->first();
        return $existUser;
    }
}
