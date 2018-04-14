<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\OrganizationCollection;
use App\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OrganizationProfileController extends Controller
{
    public function show(User $user)
    {
        if (!is_null($org = $user->organization))
            return new OrganizationCollection($org);
        throw new ModelNotFoundException();
    }
}
