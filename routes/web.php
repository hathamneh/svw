<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Route;

Route::get('/', 'LandingController@index')->name('home');
Route::get ( '/redirect/{service}', 'SocialLoginController@redirect' );
Route::get ( '/callback/{service}', 'SocialLoginController@callback' );

Auth::routes();

Route::middleware(["auth", "lang"])->group(function () {
    Route::get('/register/wizard', 'WizardController@index');

    Route::post('/register/wizard', 'WizardController@store');

    Route::get('user/activation/{token}', 'Auth\LoginController@activateUser')->name('user.activate');


    Route::get('/volunteer/{username}', 'ProfileController@show')->name('profile.volunteer');
    Route::get('/volunteer/{username}/edit', 'ProfileController@edit')->name('profile.volunteer.edit');

    Route::get('/organization/{username}', 'OrganizationProfileController@show')->name('profile.organization');
    Route::get('/organization/{username}/edit', 'OrganizationProfileController@edit')->name('profile.organization.edit');

    Route::get('/search', "SearchController@show")->name("search");

    Route::get("/post/{post}", "PostController@show")->name("posts.show");

    Route::get("/event/create", "EventController@create");
    Route::get("/event/{event}", "EventController@show")->name('event.show');
});


// Localization
Route::get('/js/lang.js', function () {
    //$strings = Cache::rememberForever('lang.js', function () {
        $lang = config('app.locale');

        $files = glob(resource_path('lang/' . $lang . '/*.php'));
        $strings = [];

        foreach ($files as $file) {
            $name = basename($file, '.php');
            $strings[$name] = require $file;
        }

        //return $strings;
    //});

    header('Content-Type: text/javascript');
    echo('window.i18n = ' . json_encode($strings) . ';');
    exit();
})->name('assets.lang');


