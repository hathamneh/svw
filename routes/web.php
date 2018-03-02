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

Route::get('/', 'LandingController@index')->name('landing');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/register/wizard', 'WizardController@index');

Route::post('/register/wizard', 'WizardController@store');

Route::get('user/activation/{token}', 'Auth\LoginController@activateUser')->name('user.activate');


