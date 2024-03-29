<?php

namespace App\Http\Controllers\Auth;

use App\ActivationService;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\URL;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/';

    protected $loginPath = '/login';

    protected $activationService;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(ActivationService $activationService)
    {
        $this->middleware('guest')->except('logout', 'activateUser');
        $this->activationService = $activationService;
    }

    protected function credentials(Request $request)
    {
        $username = $request->get($this->username());
        if (filter_var($username, FILTER_VALIDATE_EMAIL)) {
            //user sent their email
            return ['email' => $username, 'password' => $request->get($this->password())];
        } else {
            //they sent their username instead
            return ['username' => $username, 'password' => $request->get($this->password())];
        }
    }

    public function username()
    {
        return 'login_email';
    }

    public function password()
    {
        return 'login_password';
    }

    protected function validateLogin(Request $request)
    {
        $this->validate($request, [
            $this->username() => 'required|string',
            $this->password() => 'required|string',
        ]);
    }

    public function activateUser($token)
    {
        if ($user = $this->activationService->activateUser($token)) {
            auth()->login($user);
            return redirect($this->redirectPath());
        }
        abort(404);
    }

    public function showLoginForm()
    {
        return view("auth.login")->with("login", true);
    }


    protected function sendFailedLoginResponse(Request $request)
    {
        $prev = $request->headers->get('referer');
        $prev = parse_url($prev, PHP_URL_PATH);
        if ($prev !== "/login")
            return redirect($this->loginPath)->withInput()->withErrors([
                $this->username() => [trans('auth.failed')],
            ]);
        else
            throw ValidationException::withMessages([
                $this->username() => [trans('auth.failed')],
            ]);

    }

}
