<?php

namespace App\Http\Controllers\Api;

use App\User;
use App\Volunteer;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class ImagesUploadController extends Controller
{
    public function upload($target, Request $request)
    {
        /** @var User $user */
        $user = Auth::user();

        $user = User::find(1);


        /** @var Volunteer $volunteer */
        if(is_null($volunteer = $user->volunteer))
            throw new ModelNotFoundException("Volunteer with this user is not found");

        if($request->has("image_data") && $request->has("image_ext")) {
            $image_data = base64_decode($request->get("image_data"));
            $file_extension = $request->get("image_ext");
            $volunteer->uploadImage($target,$image_data,$file_extension);
            return ["uploaded"=>true];
        }
        return ["uploaded"=>false];
    }
}
