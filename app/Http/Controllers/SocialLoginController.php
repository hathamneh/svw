<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class SocialLoginController extends Controller
{

    protected $redirectTo = '/';

    public function redirect($service)
    {
        return Socialite::driver($service)->redirect();
    }

    public function callback($service)
    {
        $user = Socialite::with($service)->user();
        logger($user->getToken());
        $authUser = $this->findOrCreateUser($user, $service);
        Auth::login($authUser);
        return redirect($this->redirectTo);
    }

    public function findOrCreateUser($user, $provider)
    {
        /** @var User $authUser */

        $authUser = User::where("email", $user->email)->orWhere(function($query) use ($provider, $user) {
            $query->where("provider", $provider)
                ->where("provider_id", $user->id);
        })->first();
        if ($authUser) {
            return $authUser;
        }
        $authUser = User::create([
            'username'     => $user->id,
            'email'    => $user->email,
            'provider' => $provider,
            'provider_id' => $user->id
        ]);
        $authUser->uploadImageFromUrl("profile", $user->getAvatar());
        return $authUser;
    }


    protected function guard()
    {
        return Auth::guard();
    }
}
