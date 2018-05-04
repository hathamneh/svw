<?php

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;

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
Route::namespace("Api")->middleware("lang")->group(function () {
    Route::post('/login', "AuthController@login");
    Route::post('/register', "AuthController@register");
    Route::post('/login/social', "AuthController@social");
    Route::get('/social/{provider}/authorize', function ($provider) {
        $config = new \SocialiteProviders\Manager\Config($clientId,$clientSecret,$redirectUrl);

        return Socialite::driver($provider)->stateless()->redirect();
    });
    Route::get('/social/{provider}/login', function ($provider) {
        $socialite = Socialite::driver($provider)->stateless()->user();

        $user_by_email = User::where('email', $socialite->email)->first();

        if ($user_by_email) {
            $user = $user_by_email;
        }



        return $user;
    });
    Route::get('/countries', "CountriesController@index");
    Route::get('/countries/keyValue', "CountriesController@keyValue");

    Route::middleware('auth:api')->group(function () {
        Route::post('/registration/{type}', "WizardController@store")->where(['type' => 'volunteer|organization']);
        Route::get('/user/{user?}', function (User $user = null, Request $request) {
            if (!is_null($user))
                return new \App\Http\Resources\UserCollection($user);
            return new \App\Http\Resources\UserCollection($request->user());
        })->where(['user' => '[0-9]+']);;

        Route::resource('/volunteer', "VolunteerController", ['except' => ['show']]);
        Route::get('/volunteer/{user}', "VolunteerController@show")->where(['user' => '[0-9]+']);

        Route::resource('/volunteer/{user}/education', "EducationController", ['except' => ['index', 'show']]);
        Route::get('/volunteer/education', "EducationController@index");
        Route::get('/volunteer/{user}/education', "EducationController@show")
            ->where(['user' => '[0-9]+']);

        Route::get('/volunteer/profile', "ProfileController@index");
        Route::get('/volunteer/{user}/profile', "ProfileController@show")
            ->where(['user' => '[0-9]+']);
        Route::put('/volunteer/{user}/profile', "ProfileController@update")
            ->where(['user' => '[0-9]+']);

        Route::get('/volunteer/memberships', "ProfileController@getMembership");
        Route::get('/volunteer/{user}/memberships', "ProfileController@getMembership")
            ->where(['user' => '[0-9]+']);

        Route::resource('/volunteer/{user}/experience', "ExperienceController", ['except' => ['index', 'show']]);
        Route::get('/volunteer/experience', "ExperienceController@index");
        Route::get('/volunteer/{user}/experience', "ExperienceController@show")
            ->where(['user' => '[0-9]+']);

        Route::resource('/volunteer/{user}/capability', "CapabilityController", ['except' => ['index', 'show']]);
        Route::get('/volunteer/capability/{type?}', "CapabilityController@index")
            ->where(['user' => '[0-9]+', 'type' => '[a-z]+']);
        Route::get('/volunteer/{user}/capability/{type?}', "CapabilityController@show")
            ->where(['user' => '[0-9]+', 'type' => '[a-z]+']);


        Route::post("/upload/{target}", "ImagesUploadController@upload");
        Route::post("/upload_image/{target}", "ImagesUploadController@uploadImage");

        // search
        Route::get("/search/{s}/{type?}", "SearchController@doSearch");

        // follow
        Route::post('/user/follow', "FollowController@followUser");
        Route::post('/user/unfollow', "FollowController@unfollowUser");
        Route::get('/user/followers', "FollowController@getFollowers");
        Route::get('/user/following', "FollowController@getFollowing");
        Route::get('/user/{user}/followers', "FollowController@getFollowers")->where(['user' => '[0-9]+']);
        Route::get('/user/{user}/following', "FollowController@getFollowing")->where(['user' => '[0-9]+']);


        Route::get('/user/follow/numbers', "FollowController@getNumbers");
        Route::get('/user/{user}/follow/numbers', "FollowController@getNumbers")->where(['user' => '[0-9]+']);

        Route::get('/user/following/check/{user}', "FollowController@isFollowing");

        Route::resource("/post", "PostController", ["except" => ['index']]);
        Route::get("/posts/{user?}", "PostController@index");

        Route::resource("/post/{post}/comment", "CommentController");

        Route::post("/post/like/{post}", "LikeController@like");
        Route::post("/post/unlike/{post}", "LikeController@unlike");


        // organizations
        Route::get("/organization", "OrganizationProfileController@index");
        Route::get("/organization/{user}", "OrganizationProfileController@show")->where(['user' => '[0-9]+']);
        Route::put("/organization/{user}", "OrganizationProfileController@update")->where(['user' => '[0-9]+']);
        Route::get('/organization/members', "OrganizationProfileController@getMembers");
        Route::get('/organization/{user}/members', "OrganizationProfileController@getMembers")->where(['user' => '[0-9]+']);
        Route::get('/organization/type', "OrganizationProfileController@getOrgType");
        Route::get('/organization/{user}/type', "OrganizationProfileController@getOrgType")->where(['user' => '[0-9]+']);

        Route::get("/categories", "CategoryController@index");
        Route::get("/specialities", "SpecialityController@index");

        Route::resource('/event', "EventController", ['except' => ['index']]);
        Route::get('/organization/events', "EventController@index");
        Route::get('/organization/{user}/events', "EventController@index")->where(['user' => '[0-9]+']);
        Route::post('/event/{event}/going', 'EventController@addGoing')->where(['event' => '[0-9]+']);
        Route::post('/event/{event}/leave', 'EventController@removeGoing')->where(['event' => '[0-9]+']);
        Route::get('/event/{event}/status', 'EventController@isGoing')->where(['event' => '[0-9]+']);
        Route::get('/user/events', 'EventController@schedule');
        Route::get('/user/{user}/events', 'EventController@schedule')->where(['user' => '[0-9]+']);

        Route::get("/feed/posts", "NewsfeedController@postsFeed");
        Route::get("/feed/events", "NewsfeedController@eventsFeed");
    });

});

Route::post("/logging/{type}", function ($type) {
    if ($type == "error")
        Log::error("Javascript Error: " . json_encode(Input::get()));
});

