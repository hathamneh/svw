<?php

namespace App\Http\Controllers\Api;

use App\Education;
use App\User;
use App\Volunteer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\UnauthorizedException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class EducationController extends Controller
{
    public function index()
    {
        try {
            $user = Auth::user();
            $volunteer = $user->volunteer;
            return !is_null($volunteer) && !is_null($volunteer->educations) ? $volunteer->educations : [];
        } catch (\Exception $ex) {
            return $this->jsonException($ex);
        }
    }

    public function show($id)
    {
        try {
            $user = User::findOrFail($id);
            $volunteer = $user->volunteer;
            return !is_null($volunteer) && !is_null($volunteer->educations) ? $volunteer->educations : [];
        } catch (\Exception $ex) {
            return $this->jsonException($ex);
        }
    }

    public function store(Request $request)
    {
        try {
            /** @var Volunteer $volunteer */
            $volunteer = Auth::user()->volunteer;
            $newEducation = $volunteer->educations()->create([
                'school'         => $request->school,
                'field_of_study' => $request->field_of_study,
                'gdate'          => $request->gdate,
            ]);
            return $newEducation;
        } catch (\Exception $ex) {
            Log::error($ex);
            Log::info("hi");
            return $this->jsonException($ex);
        }
    }

    public function update(Request $request)
    {
        try {

            $education = Education::findOrFail($request->id);

            /** @var Education $education */
            if (Auth::user()->volunteer->id == $education->volunteer_id) {
                $education->update([
                    'school'         => $request->school,
                    'field_of_study' => $request->field_of_study,
                    'gdate'          => $request->gdate,
                ]);
                return $education;
            } else
                throw new UnauthorizedException();

        } catch (\Exception $ex) {
            return $this->jsonException($ex);
        }

    }

    public function destroy(User $user, Education $education)
    {
        try {

            /** @var Education $education */
            if (Auth::user()->has("volunteer") && Auth::user()->id == $user->id && $education->volunteer_id == $user->volunteer->id) {

                $education->delete();

                return ["deleted" => true];
            }

        } catch (\Exception $ex) {
            return $this->jsonException($ex);
        }
    }
}
