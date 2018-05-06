<?php

namespace App\Http\Controllers\Api;

use App\Category;
use App\Http\Resources\VolunteerCollection;
use App\Organization;
use App\Speciality;
use App\User;
use App\Volunteer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class WizardController extends Controller
{

    public function store($type, Request $request)
    {
        switch ($type) {
            case "volunteer":
                return $this->storeVolunteer($request);
            case "organization":
                return $this->storeOrganization($request);
        }
        throw new NotFoundHttpException();

    }

    private function storeVolunteer(Request $request)
    {
        $user_data = $this->sanitizeData($request);

        $validator = $this->validateVolunteer((array)$user_data->personal_info);
        if ($validator->passes()) {
            $volunteer = $this->newVolunteer($user_data);

            $volunteer->load('user', 'educations', 'experiences', 'capabilities');

            return new VolunteerCollection($volunteer);

        } else {
            return response()->json(["errors" => $validator->errors()->all()], 400);
        }

    }


    private function storeOrganization($request)
    {
        $user_data = $this->sanitizeData($request);

        $validator = $this->validateOrganization((array)$user_data);
        if ($validator->passes()) {
            return $this->newOrganization($user_data);
        } else {
            return response()->json(["errors" => $validator->errors()->all()], 400);
        }
    }

    private function sanitizeData(Request $request)
    {
        $user_data_raw = $request->get('data');
        Log::debug($user_data_raw);
        if (is_array($user_data_raw))
            return json_decode(json_encode($user_data_raw));
        else
            return json_decode($user_data_raw);

    }

    private function newVolunteer($user_data)
    {
        /**
         * @var User $user
         */
        $user = Auth::user();
        $user->accountType("volunteer");

        $volunteer = new Volunteer([
            'first_name' => $user_data->personal_info->first_name,
            'last_name'  => $user_data->personal_info->last_name,
            'gender'     => $user_data->personal_info->gender,
            'birthday'   => date("Y-m-d G:i:s", strtotime($user_data->personal_info->birthday)),
            'country'    => $user_data->personal_info->country,
        ]);

        $volunteer->city =  $user_data->personal_info->city ?? null;
        $volunteer->phone = $user_data->personal_info->phone ?? null;
        if (isset($user_data->personal_info->bio))
            $volunteer->bio = $user_data->personal_info->bio;

        // associate to user and save
        $volunteer->user()->associate($user);
        $volunteer->save();

        $volunteer->saveEducations($user_data->educationAdded);
        $volunteer->saveExperiences($user_data->experienceAdded);
        $volunteer->saveCapabilities($user_data->capabilities);

        return $volunteer;
    }

    private function newOrganization($user_data)
    {
        /**
         * @var User $user
         */
        $user = Auth::user();
        $user->accountType("organization");

        $organization = new Organization([
            'name'         => $user_data->details->name,
            'founded_date' => $user_data->details->founded_date,
            'country'      => $user_data->details->country,
        ]);


        $organization->city = $user_data->details->city ?? null;
        $organization->address = $user_data->details->address ?? null;
        $organization->about = $user_data->details->about ?? null;
        $organization->website = $user_data->details->website ?? null;

        if (is_int($user_data->category) && !is_null($category = Category::find($user_data->category)))
            $organization->category()->associate($category);
        elseif(is_string($user_data->category))
            $organization->category()->associate(Category::where('name', '=', $user_data->category)->firstOrFail());


        $organization->user()->associate($user);
        $organization->save();

        if (isset($user_data->specialities) && is_array($user_data->specialities)) {
            foreach ($user_data->specialities as $speciality) {
                if (is_int($speciality) && !is_null($Spec = Speciality::find($speciality)))
                    $organization->specialities()->attach($Spec);
                else
                    $organization->specialities()->attach(Speciality::firstOrCreate(['name' => $speciality]));
            }
        }
        return $organization;
    }

    private function validateVolunteer($data)
    {
        $rules = [
            'first_name' => 'required',
            'last_name'  => 'required',
            'birthday'   => 'required|date',
            'gender'     => 'required',
            'country'    => 'required',
        ];

        return Validator::make(json_decode(json_encode($data), true), $rules);
    }

    private function validateOrganization($data)
    {
        $rules = [
            'details.name'         => 'required',
            'details.founded_date' => 'required|date',
            'details.country'      => 'required',
            'category'             => 'required',
        ];

        return Validator::make(json_decode(json_encode($data), true), $rules);
    }

}
