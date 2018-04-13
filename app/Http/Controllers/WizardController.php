<?php

namespace App\Http\Controllers;

use App\Education;
use App\Experience;
use App\User;
use PeterColes\Countries\CountriesFacade as Countries;
use App\Volunteer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;


class WizardController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $user = Auth::user();
        $countries = Countries::lookup();
        return view('wizard')->with([
            'user'      => $user,
            'countries' => $countries,
            'wizard'    => true,
        ]);
    }



}
