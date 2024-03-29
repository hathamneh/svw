<?php

namespace App\Http\Controllers\Api;

use App\Experience;
use App\Http\Resources\ExperienceCollection;
use App\User;
use App\Volunteer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\UnauthorizedException;
use Mockery\Exception;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ExperienceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return array|\Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        try {
            $user = Auth::user();
            $volunteer = $user->volunteer;
            return !is_null($volunteer) ? ExperienceCollection::collection($volunteer->experiences) : [];
        } catch (\Exception $ex) {
            return $this->jsonException($ex);
        }
    }


    public function show($id)
    {
        try {
            $user = User::findOrFail($id);
            $volunteer = $user->volunteer;
            return !is_null($volunteer) ? ExperienceCollection::collection($volunteer->experiences) : [];
        } catch (\Exception $ex) {
            return $this->jsonException($ex);
        }
    }

    public function store(Request $request)
    {
        try {
            /** @var Volunteer $volunteer */
            $volunteer = Auth::user()->volunteer;
            $newExperience = $volunteer->experiences()->create([
                'position'         => $request->position,
                'organization_name' => $request->organization_name,
                'period'          => $request->period,
                'desc'          => $request->desc,
            ]);
            return new ExperienceCollection($newExperience);
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
                return new ExperienceCollection($experience);
            } else
                throw new UnauthorizedException();

        } catch (\Exception $ex) {
            return $this->jsonException($ex);
        }

    }

    public function destroy(User $user, Experience $experience)
    {
        try {
            /** @var Experience $experience */
            if (Auth::user()->has("volunteer") && Auth::user()->id == $user->id && $experience->volunteer_id == $user->volunteer->id) {

                $experience->delete();

                return ["deleted" => true];
            }
        } catch (\Exception $ex) {
            return $this->jsonException($ex);
        }
    }

}
