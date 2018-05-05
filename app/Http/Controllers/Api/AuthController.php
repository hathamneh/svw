<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Laravel\Socialite\Facades\Socialite;

class AuthController extends Controller
{

    public $successStatus = 200;

    /**
     * login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login()
    {
        if (Auth::attempt(['email' => request('email'), 'password' => request('password')])) {
            $user = Auth::user();
            $success['token'] = $user->createToken('SVW APP')->accessToken;
            $success['user_id'] = $user->id;
            $success['is_org'] = $user->is_org;
            $success['ready'] = $user->ready();
            return response()->json(['success' => $success], $this->successStatus);
        } else {
            return response()->json(['error' => 'Unauthorised'], 401);
        }
    }

    /**
     * social login api
     *
     * @return \Illuminate\Http\Response
     */
    public function social()
    {
        $provider = request('provider');
        $token = request('token');
        $driver = Socialite::driver($provider);
        $providerUser = $driver->userFromToken($token);
        $user = $this->findOrCreateUser($providerUser, $provider);
        logger($providerUser->email);
        logger($token);
        logger($user);
        if ($user) {
            Auth::login($user);
            $user = Auth::user();
            $success['token'] = $user->createToken('SVW APP')->accessToken;
            $success['user_id'] = $user->id;
            $success['is_org'] = $user->is_org;
            $success['ready'] = $user->ready();
            return response()->json(['success' => $success], $this->successStatus);
        } else {
            return response()->json(['error' => 'Unauthorised'], 401);
        }
    }

    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] = $user->createToken('SVW APP')->accessToken;
        $success['username'] = $user->username;
        $success['user_id'] = $user->id;
        return response()->json(['success' => $success], $this->successStatus);
    }

    /**
     * details api
     *
     * @return \Illuminate\Http\Response
     */
    public function getDetails()
    {
        $user = Auth::user();
        return response()->json(['success' => $user], $this->successStatus);
    }

    public function findOrCreateUser($user, $provider)
    {
        /** @var User $authUser */
        $tmp = User::where("email", $user->email)->orWhere(function ($query) use ($provider, $user) {
            $query->where("provider", $provider)
                ->where("provider_id", $user->id);
        });
        $query = str_replace(array('?'), array('\'%s\''), $tmp->toSql());
        $query = vsprintf($query, $tmp->getBindings());
        logger($query);
        $authUser = $tmp->first();
        if ($authUser) {
            return $authUser;
        }
        $authUser = User::create([
            'username' => substr($user->email, 0,strpos($user->email, "@")),
            'email' => $user->email,
            'is_org' => false,
            'provider' => $provider,
            'provider_id' => $user->id
        ]);
        $authUser->uploadImageFromUrl("profile", $user->getAvatar());
        return $authUser;
    }
}
