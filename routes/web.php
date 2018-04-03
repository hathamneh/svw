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

    Route::get('/search', function (Request $request) {
        $data = [];
        if ($request->has("s"))
            $data['s'] = $request->get("s");
        return view("search")->with($data);
    })->name("search");
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


Route::get("/test", function () {

    $contents = file_get_contents(public_path() . "/me.jpg");


    try {
        // $requestOptions = ['some options, nothing fancy'];
        $handler = new GuzzleHttp\Handler\StreamHandler();
        $stack = \GuzzleHttp\HandlerStack::create($handler);
        $client = new GuzzleHttp\Client(['handler' => $stack]);
        $request = new GuzzleHttp\Psr7\Request('POST', 'http://svw.test/api/upload/profile', [
            'Authentication' => "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjczNzgyOWUxZTg1Y2ZkOTA4MWQ4NzQ0ZGIwYmQ1ODlkNzI4MzRmNTJlNjRkNDY5NDBkMjE3Mzg4NGFkNDA0YzQ5NWZiMzM5MmU5MTE0ZDk3In0.eyJhdWQiOiIzIiwianRpIjoiNzM3ODI5ZTFlODVjZmQ5MDgxZDg3NDRkYjBiZDU4OWQ3MjgzNGY1MmU2NGQ0Njk0MGQyMTczODg0YWQ0MDRjNDk1ZmIzMzkyZTkxMTRkOTciLCJpYXQiOjE1MjE1NjAyMDYsIm5iZiI6MTUyMTU2MDIwNiwiZXhwIjoxNTUzMDk2MjA2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.WT6lLFG2V_4jv26_HRpnN79Mhik4dRLxETUvmDuPTt_XgZB28-9RaQqnVzSU0CrvTqphta6uXeJkUnRZWB6lgAmawfrQ9Ehm-NuCw6_V23FYCq2bE1rl9O1_HQeR5ittngO8fvTUbU6IensfU10Ha5CK72biH-mlXglcBh16XBOuOg1pVXWXJotLv8cwKBxjyBSgntIORxAr5bkmdXhRr5_9suPR0EV_WkL60i4FN0C4EPhHo3IMm6QHyuyEnelQkAOZhNKQ0Zf6DCgvYX7yEBL2EBa8fMw-nRAB9qGDVDJIuc12QXn6mJRkIvTQPl1c_cMzSke6TgoANR4HnWLns35FniNVarZ0sIMwibl6V9oFsSa3GhRKQH2Z2eAR3gsdk1S7lZc3VsMQCFY85SIzUuGoyvJKlMFXcmez90bphQNYgAApQbeFgxAxEEf-TmeZmudp32kKsoMlyjr4q3Wmv9L8DtXRt3ZxqG3BV_0f8aoltkTOZv3IDhIOe5HqfcwvGZw9BxuKhR_iMR4jdxBXnU8RFFlI8WJxjNwDs-z6JxGqEFXAAqW9KQZkkhMr4yfObvo7bgUJCbMmrXosdv3ftVlKdhAeYhqvaLfke_ZIOEmxFqNL1j9tJhfKOJGW4MK_HpYx77HOluYLkA6cWoAsUO2yMvaVRIvoT6ao8nFqbv4",
            'Content-Type'   => "application/json",
            'accept'         => "application/json",
        ], json_encode([
            "image_data" => base64_encode($contents),
            "image_ext"  => "jpg",
        ]));
        return $client->send($request);
    } catch(\Exception $ex) {
        return Controller::jsonException($ex);
    }
});