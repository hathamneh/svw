<?php

namespace App\Http\Controllers\Api;

use App\Category;
use App\Http\Resources\CategoryCollection;
use App\Http\Resources\OrganizationCollection;
use App\Http\Resources\SpecailityCollection;
use App\Http\Resources\VolunteerCollection;
use App\Organization;
use App\Speciality;
use App\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\UnauthorizedException;

class OrganizationProfileController extends Controller
{

    public function index()
    {
        if (Auth::check() && !is_null($org = Auth::user()->organization)) {
            /** @var Organization $org */
            return new OrganizationCollection($org);
        }
        throw new ModelNotFoundException();
    }

    public function show(User $user)
    {
        if (!is_null($org = $user->organization))
            return new OrganizationCollection($org);
        throw new ModelNotFoundException();
    }

    public function update(User $user, Request $request)
    {
        /** @var Organization $org */
        if (is_null($org = Auth::user()->organization))
            throw new UnauthorizedException();
        if ($user->id != $org->user_id)
            throw new UnauthorizedException();

        $result = false;
        $data = [];
        if ($request->has("name"))
            $data['name'] = $request->get("name");
        if ($request->has("founded_date"))
            $data['founded_date'] = strtotime($request->get("founded_date"));
        if ($request->has("website"))
            $data['website'] = $request->get("website");
        if ($request->has("country_code"))
            $data['country'] = $request->get("country_code");
        if ($request->has("city"))
            $data['city'] = $request->get("city");
        if ($request->has("address"))
            $data['address'] = $request->get("address");
        if ($request->has("about"))
            $data['about'] = $request->get("about");
        if (!empty($data))
            $result = $org->update($data);

        if ($request->has('category')) {
            $category_raw = $request->get('category');
            logger($category_raw);
            if (is_int($category_raw) && !is_null($category = Category::find($category_raw))) {

                $org->category()->dissociate();
                $org->category()->associate($category);
            } elseif (is_string($category_raw)) {
                $org->category()->dissociate();
                $org->category()->associate(Category::where('name', '=', $category_raw)->firstOrFail());
            }
            $org->push();
            $result = true;
        }

        if ($request->has('specialities')) {
            $spec_raw = $request->get('specialities');
            if (isset($spec_raw) && is_array($spec_raw)) {
                $add = array_filter($spec_raw, 'is_int');
                $new = array_filter($spec_raw, 'is_string');
                foreach ($new as $speciality) {
                    $s = Speciality::firstOrCreate(['name' => $speciality]);
                    $add[] = $s->id;
                }
                $org->specialities()->sync($add);
                $result = true;
            }
        }

        return response()->json(['updated' => $result]);

    }

    public function getMembers(User $user = null)
    {
        if (is_null($user))
            $user = Auth::user();
        if (!$user->is_org)
            throw new ModelNotFoundException();

        return VolunteerCollection::collection($user->members());
    }

    public function getOrgType(User $user = null)
    {
        if (is_null($user))
            $user = Auth::user();
        if (!$user->is_org || is_null($org = $user->organization))
            throw new ModelNotFoundException();
        return [
            'id'           => $org->id,
            'category'     => $org->category->id,
            'specialities' => collect($org->specialities)->pluck('id'),
        ];
    }
}
