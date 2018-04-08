<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if (Auth::guard($guard)->check()) {
            $user = Auth::user();
            $volunteer = $user->volunteer;
            if (is_null($volunteer))
                return redirect("/register/wizard");
            return view('home')->with([
                'user'      => $user,
                'volunteer' => $volunteer,
            ]);
        }

        return $next($request);
    }
}
