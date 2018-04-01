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

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Route;

Route::get('/', 'LandingController@index')->name('home');

Auth::routes();

Route::middleware(["auth", "lang"])->group(function(){
    Route::get('/register/wizard', 'WizardController@index');

    Route::post('/register/wizard', 'WizardController@store');

    Route::get('user/activation/{token}', 'Auth\LoginController@activateUser')->name('user.activate');


    Route::get('/volunteer/{username}', 'ProfileController@index')->name('profile.main');
    Route::get('/volunteer/{username}/edit', 'ProfileController@edit')->name('profile.edit');

    Route::get('/search', function (Request $request) {
        $data = [];
        if($request->has("s"))
            $data['s'] = $request->get("s");
        return view("search")->with($data);
    })->name("search");
});


// Localization
Route::get('/js/lang.js', function () {
    $strings = Cache::rememberForever('lang.js', function () {
        $lang = config('app.locale');

        $files   = glob(resource_path('lang/' . $lang . '/*.php'));
        $strings = [];

        foreach ($files as $file) {
            $name           = basename($file, '.php');
            $strings[$name] = require $file;
        }

        return $strings;
    });

    header('Content-Type: text/javascript');
    echo('window.i18n = ' . json_encode($strings) . ';');
    exit();
})->name('assets.lang');