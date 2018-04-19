<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class LandingController extends Controller
{
    public function index()
    {
        //$this->middleware('guest');
        if (Auth::check())
            return $this->indexLoggedIn();
        else
            return $this->indexGuest();
    }


    public function indexGuest()
    {
        return view('landing', [
            'body_classes' => "is-landing",
        ]);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexLoggedIn()
    {
        /** @var User $user */
        $user = Auth::user();
        if(!$user->ready())
            return redirect("/register/wizard");


        $personal = $user->is_org ? $user->organization : $user->volunteer;

        Log::debug($user->is_org);

        return view('home')->with([
            'user'      => $user,
            'personal' => $personal,
        ]);
    }
}
