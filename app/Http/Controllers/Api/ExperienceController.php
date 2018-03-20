<?php

namespace App\Http\Controllers\Api;

use App\Experience;
use App\User;
use App\Volunteer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\UnauthorizedException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ExperienceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $user = Auth::user();
            $volunteer = $user->volunteer;
            return !is_null($volunteer) && !is_null($volunteer->experiences) ? $volunteer->experiences : [];
        } catch (\Exception $ex) {
            return $this->jsonException($ex);
        }
    }


    public function show($id)
    {
        try {
            $user = User::findOrFail($id);
            $volunteer = $user->volunteer;
            return !is_null($volunteer) && !is_null($volunteer->experiences) ? $volunteer->experiences : [];
        } catch (\Exception $ex) {
            return $this->jsonException($ex);
        }
    }

    public function store(Request $request)
    {
        try {
            /** @var Volunteer $volunteer */
            $volunteer = Auth::user()->volunteer;
            $newEducation = $volunteer->experiences()->create([
                'school'         => $request->school,
                'field_of_study' => $request->field_of_study,
                'gdate'          => $request->gdate,
            ]);
            return $newEducation;
        } catch (\Exception $ex) {
            return $this->jsonException($ex);
        }
    }

    public function update(Request $request)
    {
        try {

            $experience = Experience::findOrFail($request->id);

            /** @var Experience $experience */
            if (Auth::user()->volunteer->id == $experience->volunteer_id) {
                $experience->update([
                    'school'         => $request->school,
                    'field_of_study' => $request->field_of_study,
                    'gdate'          => $request->gdate,
                ]);
                return $experience;
            } else
                throw new UnauthorizedException();

        } catch (\Exception $ex) {
            return $this->jsonException($ex);
        }

    }

    public function destroy(Request $request)
    {
        try {
            $experience = Experience::findOrFail($request->id);
            /** @var Experience $experience */
            if (Auth::user()->has("volunteer") && Auth::user()->volunteer->id == $experience->volunteer_id) {

                $experience->delete();

                return ["deleted" => true];
            }
        } catch (\Exception $ex) {
            return $this->jsonException($ex);
        }
    }

}
