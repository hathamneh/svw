<?php

use App\User;
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
    Route::get('/countries', "CountriesController@index");

    Route::middleware('auth:api')->group(function () {
        Route::post('/registration/{type}', "WizardController@store")->where(['type' => 'volunteer|organization']);
        Route::get('/user', function (Request $request) {
            return $request->user();
        });

        Route::resource('/volunteer', "VolunteerController", ['except' => ['show']]);
        Route::get('/volunteer/{user}', "VolunteerController@show")->where(['user' => '[0-9]+']);

        Route::resource('/volunteer/{user}/education', "EducationController", ['except' => ['index','show']]);
        Route::get('/volunteer/education', "EducationController@index");
        Route::get('/volunteer/{user}/education', "EducationController@show");

        Route::get('/volunteer/profile', "ProfileController@index");
        Route::get('/volunteer/{user}/profile', "ProfileController@show");
        Route::put('/volunteer/{user}/profile', "ProfileController@update");

        Route::get('/volunteer/{user}/memberships', "ProfileController@getMembership");

        Route::resource('/volunteer/{user}/experience', "ExperienceController", ['except' => ['index','show']]);
        Route::get('/volunteer/experience', "ExperienceController@index");
        Route::get('/volunteer/{user}/experience', "ExperienceController@show");

        Route::resource('/volunteer/{user}/capability', "CapabilityController", ['except' => ['index','show']]);
        Route::get('/volunteer/capability/{type?}', "CapabilityController@index")->where(['type' => '[a-z]+']);
        Route::get('/volunteer/{user}/capability/{type?}', "CapabilityController@show")->where(['type' => '[a-z]+']);


        Route::post("/upload/{target}", "ImagesUploadController@upload");

        // search
        Route::get("/search/{s}/{type?}", "SearchController@show");

        // follow
        Route::post('/user/follow', "FollowController@followUser");
        Route::post('/user/unfollow', "FollowController@unfollowUser");
        Route::get('/user/followers', "FollowController@getFollowers");
        Route::get('/user/following', "FollowController@getFollowing");
        Route::get('/user/{user}/followers', "FollowController@getFollowers");
        Route::get('/user/{user}/following', "FollowController@getFollowing");

        Route::get('/user/follow/numbers', "FollowController@getNumbers");
        Route::get('/user/{user}/follow/numbers', "FollowController@getNumbers");

        Route::get('/user/following/check/{user}', "FollowController@isFollowing");

        Route::resource("/post","PostController", ["except" => ['index']]);
        Route::get("/posts/{user?}","PostController@index");

        Route::resource("/post/{post}/comment","CommentController");

        Route::post("/post/like/{post}", "LikeController@like");
        Route::post("/post/unlike/{post}", "LikeController@unlike");


        // organizations
        Route::get("/organization/{user}", "OrganizationProfileController@show");

        Route::get("/categories", "CategoryController@index");
        Route::get("/specialities", "SpecialityController@index");
    });

});

Route::post("/logging/{type}", function($type) {
    if($type == "error")
        Log::error("Javascript Error: ".json_encode(Input::get()));
});

