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

        if ($request->has("image_data") && $request->has("image_ext")) {
            $image_data = base64_decode($request->get("image_data"));
            $file_extension = $request->get("image_ext");
            $user->uploadImageEncoded($target, $image_data, $file_extension);
            return ["uploaded" => true];
        }
        return ["uploaded" => false];

    }

    public function uploadImage($target, Request $request)
    {
        /** @var User $user */
        $user = Auth::user();
        if ($request->hasFile('image')) {
            return [
                'result' => true,
                'url'    => $user->uploadImage($target, $request->file("image")),
            ];
        }
        return ['result' => false];
    }
}
