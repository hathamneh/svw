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

Auth::routes();

Route::middleware(["auth", "lang"])->group(function () {
    Route::get('/register/wizard', 'WizardController@index');

    Route::post('/register/wizard', 'WizardController@store');

    Route::get('user/activation/{token}', 'Auth\LoginController@activateUser')->name('user.activate');


    Route::get('/volunteer/{username}', 'ProfileController@index')->name('profile.main');
    Route::get('/volunteer/{username}/edit', 'ProfileController@edit')->name('profile.edit');

    Route::get('/search', "SearchController@show")->name("search");
});


// Localization
Route::get('/js/lang.js', function () {
    $strings = Cache::rememberForever('lang.js', function () {
        $lang = config('app.locale');

        $files = glob(resource_path('lang/' . $lang . '/*.php'));
        $strings = [];

        foreach ($files as $file) {
            $name = basename($file, '.php');
            $strings[$name] = require $file;
        }

        return $strings;
    });

    header('Content-Type: text/javascript');
    echo('window.i18n = ' . json_encode($strings) . ';');
    exit();
})->name('assets.lang');


//Route::get("/test", function () {
//
//    $contents = file_get_contents(public_path() . "/me.jpg");
//
//
//    try {
//        // $requestOptions = ['some options, nothing fancy'];
//        $handler = new GuzzleHttp\Handler\StreamHandler();
//        $stack = \GuzzleHttp\HandlerStack::create($handler);
//        $client = new GuzzleHttp\Client(['handler' => $stack]);
//        $request = new GuzzleHttp\Psr7\Request('POST', 'http://159.65.50.55/api/upload/profile', [
//            'Authorization' => "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQwNDQzZjBjNWMyZjVlNmIyYWZiYmQyMmJkOGQ3ZDYyNmEzYzA3ZTUzNDdhM2E4YjBhMjE4MmVkNGM0ZTA4NWNkNDY0YTIxMGRiZGFhZGY0In0.eyJhdWQiOiIxIiwianRpIjoiZDA0NDNmMGM1YzJmNWU2YjJhZmJiZDIyYmQ4ZDdkNjI2YTNjMDdlNTM0N2EzYThiMGEyMTgyZWQ0YzRlMDg1Y2Q0NjRhMjEwZGJkYWFkZjQiLCJpYXQiOjE1MjI2MTAzMzIsIm5iZiI6MTUyMjYxMDMzMiwiZXhwIjoxNTU0MTQ2MzMyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.px-nmlgWWLGS-aFFPNBcqQ-fMxUo4sME6kCgCfmFwVQDSTQxL6PfCg0SGUmtOP2Dq0Et2lj6gZrSP7RnL0HgUx3aVdKupTHnQm2Kj-P_R8-cavcECVTn_VfvUDsj_DNgT6d3oKMrnyFlsPQ0wjC14kfsD3h5qGijbLrAQPLrM-Z8OEr8d_cfLj7pI6X5tkAxe_8jk2LMG2zv3u2e87sSQfpaqXgov5GbKF-JqczaTePA5RfV9MNQtXiWEBXZBPFT6aux8QG7e3UZN3IhqA-jerMt4sivOJNQQvgV0XGkGeBztjxcFtoHrdQAmpmqNGhSsJiVuEWTukVsYioAozPVPiXnzDbG-u6daa4OXR42XuOEushr47Iprx1XpbvU0faemf0RANcgKZuHRupJ9wSUs7wWA0QPTMFGucVoAeRyAb3mO2sns6OKznxWcaiOm_ptvXT-CYWHpef7kqQK0RPA-tIde_NMOgRqy82sWjwfu1cia1e2P0Hdwso5Lrd-pS-DBoJwK8eNTBDYbkcqfjqgZi6SHp3IBVFLz5knGo766Uo-R7Uv644sRMLn3s3j_AxEZx1An4W9yczSPkShoQG97EHQUF2TtM3tV1Sv5TjksvyP_4frH1E_kjPuVmBSRU_q9bLhopY9bn221-5_jEAkcNC_tUa2ReKxZavLI_LUg24",
//            'Content-Type'   => "application/json",
//            'accept'         => "application/json",
//        ], json_encode([
//            "image_data" => base64_encode($contents),
//            "image_ext"  => "jpg",
//        ]));
//        return $client->send($request);
//    } catch(\Exception $ex) {
//        return Controller::jsonException($ex);
//    }
//});