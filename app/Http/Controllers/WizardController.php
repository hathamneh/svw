<?php

namespace App\Http\Controllers;

use App\Education;
use App\Experience;
use App\User;
use App\Util\Countries;
use App\Volunteer;
use Illuminate\Http\Request;
use JavaScript;
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
        $countries = Countries::all();
        JavaScript::put([
            'user' => $user,
            'countries' => $countries,
            'old' => session()->getOldInput(),
        ]);
        return view('wizard')->with([
            'user' => $user,
            'countries' => $countries
        ]);
    }

    public function store(Request $request)
    {
        $user_data = json_decode($request->get('data'));
        /**
         * @var User $user
         */
        $user = Auth::user();
        $user->accountType($user_data->accountType);

        if (!$user->is_org) {

            $this->newVolunteer($user, $user_data);

            return redirect('home');
        }
    }

    public function newVolunteer($user, $user_data)
    {
        $volunteer = new Volunteer([
            'first_name' => $user_data->personal_info->first_name,
            'last_name' => $user_data->personal_info->last_name,
            'gender' => $user_data->personal_info->gender,
            'birthday' => $user_data->personal_info->birthday,
            'country' => $user_data->personal_info->country,
            'city' => $user_data->personal_info->city,
            'phone' => $user_data->personal_info->phone,
        ]);

        if(isset($user_data->personal_info->bio))
            $volunteer->bio = $user_data->personal_info->bio;

        // associate to user and save
        $volunteer->user()->associate($user);
        $volunteer->save();

        // add his education
        $volunteer->saveEducations($user_data->educationAdded);

        // add his experiences
        $volunteer->saveExperiences($user_data->experienceAdded);

        // add his capabilities
        $volunteer->saveCapabilities($user_data->capabilities);
    }
}
