<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\OrganizationCollection;
use App\Organization;
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

        logger($request);

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

        return response()->json(['updated' => $result]);

    }
}
