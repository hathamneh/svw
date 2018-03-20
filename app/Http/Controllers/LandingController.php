<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class LandingController extends Controller
{
    public function index()
    {
        //$this->middleware('guest');
        if(Auth::check())
            return $this->indexLoggedIn();
        else
            return $this->indexGuest();
    }

    public function indexGuest()
    {
        return view('landing',[
            'body_classes'=> "is-landing"
        ]);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexLoggedIn()
    {
        $user = auth()->user();
        $volunteer = $user->volunteer;
        if (is_null($volunteer))
            return redirect("/register/wizard");
        return view('home')->with('volunteer', $volunteer);
    }
}
