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
        Route::resource('/volunteer', "VolunteerController", ['except' => ['show']]);
        Route::get('/volunteer/{id}', "VolunteerController@show")->where(['id' => '[0-9]+']);

        Route::resource('/volunteer/{user}/education', "EducationController", ['except' => ['index','show']]);
        Route::get('/volunteer/education', "EducationController@index");
        Route::get('/volunteer/{user}/education', "EducationController@show");

        Route::resource('/volunteer/{user}/experience', "ExperienceController", ['except' => ['index','show']]);
        Route::get('/volunteer/experience', "ExperienceController@index");
        Route::get('/volunteer/{user}/experience', "ExperienceController@show");

        Route::get('/volunteer/capability/{type?}', "CapabilityController@index")->where(['type' => '[a-z]+']);
        Route::get('/volunteer/{user}/capability/{type?}', "CapabilityController@show")->where(['type' => '[a-z]+']);
    });

});

Route::post("/logging/{type}", function($type) {
    if($type == "error")
        Log::error("Javascript Error: ".json_encode(Input::get()));
});