<?php

namespace App\Http\Controllers\Api;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\WizardController as Wizard;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class WizardController extends Controller
{
    public function store(Request $request)
    {
        $user_data_raw = $request->get('data');

        Log::debug(print_r($request->toArray(),true));
        Log::debug($user_data_raw);

        if (is_array($user_data_raw))
            $user_data = json_decode(json_encode($user_data_raw));
        else
            $user_data = json_decode($user_data_raw);

        /**
         * @var User $user
         */
        $user = Auth::user();

        $user->accountType($user_data->accountType);


        if (!$user->is_org) {
            //$validator = Wizard::validateVolunteer((array)$user_data);
            //if ($validator->passes()) {

                $volunteer = Wizard::newVolunteer($user, $user_data);
                $volunteer->load('user', 'educations', 'experiences', 'capabilities');
                return $volunteer;

            //} else {
//                dd($validator->errors()->all());
//            }
        }
        return $user;
    }
}
