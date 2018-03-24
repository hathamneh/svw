<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::namespace("Api")->group(function () {
    Route::post('/login', "AuthController@login");
    Route::post('/register', "AuthController@register");

    Route::middleware('auth:api')->group(function () {
        Route::post('/registration/wizard', "WizardController@store");
        Route::get('/user', function (Request $request) {
            return $request->user();
        });
        Route::resource('/volunteer', "VolunteerController");
        Route::resource('/volunteer/education', "EducationController");
        Route::resource('/volunteer/experience', "ExperienceController");
        Route::resource('/volunteer/capability', "CapabilityController");
    });

});

Route::post("/logging/{type}", function($type) {
    if($type == "error")
        Log::error("Javascript Error: ".json_encode(Input::get()));
});