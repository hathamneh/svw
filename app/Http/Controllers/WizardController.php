<?php

namespace App\Http\Controllers;

use App\Education;
use App\Experience;
use App\User;
use App\Util\Countries;
use App\Volunteer;
use Illuminate\Http\Request;
use JavaScript;
use Validator;
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
        return view('wizard')->with([
            'user'      => $user,
            'countries' => $countries,
            'wizard'    => true,
        ]);
    }

    public function store(Request $request)
    {
        $user_data = $request->data;
        if (is_array($user_data))
            $user_data = json_decode(json_encode($user_data));
        else
            $user_data = json_decode($user_data);


        /**
         * @var User $user
         */
        $user = $request->user();
        $user->accountType($user_data->accountType);

        if (!$user->is_org) {
            $validator = self::validateVolunteer($user_data);
            if ($validator->passes()) {
                self::newVolunteer($user, $user_data);
                return redirect()->route("home");
            } else {
                dd($validator->errors()->all());
            }

        }


    }

    public static function newVolunteer($user, $user_data)
    {
        $volunteer = new Volunteer([
            'first_name' => $user_data->personal_info->first_name,
            'last_name'  => $user_data->personal_info->last_name,
            'gender'     => $user_data->personal_info->gender,
            'birthday'   => date("Y-m-d G:i:s", strtotime($user_data->personal_info->birthday)),
            'country'    => $user_data->personal_info->country,
            'city'       => $user_data->personal_info->city,
            'phone'      => $user_data->personal_info->phone,
        ]);

        if (isset($user_data->personal_info->bio))
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

        return $volunteer;
    }

    public static function validateVolunteer($data)
    {
        $rules = [
            'accountType'              => 'required', //Must be a number and length of value is 8
            'personal_info'            => 'required|array',
            'personal_info.first_name' => 'required',
            'personal_info.last_name'  => 'required',
            'personal_info.birthday'   => 'required|date',
            'personal_info.gender'     => 'required',
            'personal_info.country'    => 'required',
            'personal_info.city'       => 'required',
            'personal_info.phone'      => 'required',
        ];

        return Validator::make(json_decode(json_encode($data), true), $rules);
    }
}
