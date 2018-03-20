@extends('layouts.app')

@section("after_body")
    <div class="bgimg"></div>
@endsection
@section("content")
    <main class="image-container">
        <div class="filter"></div>

        <div class="container login-page">
            <div class="row align-items-center">
                <div class="col-sm-6 mx-auto">

                    <div class="login-form card">
                        <div class="card-body">
                            <div class="social-login text-center">
                                <label>Login with:</label>
                                <div class="sites-links">
                                    <a href="#" class="login-btn fb-login col-sm-6">
                                        <i class="fa fa-facebook"></i> Facebook
                                    </a>
                                    <a href="#" class="login-btn google-login col-sm-6">
                                        <i class="fa fa-google"></i> Google
                                    </a>
                                </div>
                            </div>
                            <div class="divider">
                                <hr>
                                <span>OR</span>
                            </div>
                            <form class="form-horizontal" method="POST" action="{{ route('login') }}">
                                {{ csrf_field() }}
                                <div class="form-group row align-items-center{{ $errors->has('email') ? ' has-error' : '' }}">
                                    <label for="email" class="control-label col-md-3">Email: </label>
                                    <div class="col-md-9">
                                        <input id="email" type="email" class="form-control" name="login_email"
                                               value="{{ old('email') }}"
                                               placeholder="Email..." required autofocus>
                                        @if ($errors->has('email'))
                                            <span class="help-block">
                                                <strong>{{ $errors->first('email') }}</strong>
                                            </span>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-group row align-items-center{{ $errors->has('password') ? ' has-error' : '' }}">
                                    <label for="password" class="control-label col-md-3">Password: </label>
                                    <div class="col-md-9">
                                        <input id="password" type="password" class="form-control" name="login_password"
                                               placeholder="Password..."
                                               required>
                                        @if ($errors->has('password'))
                                            <span class="help-block">
                                                <strong>{{ $errors->first('password') }}</strong>
                                            </span>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-group row no-gutters">
                                    <div class="checkbox mr-auto">
                                        <label>
                                            <input type="checkbox"
                                                   name="remember" {{ old('remember') ? 'checked' : '' }}>
                                            Remember
                                            Me
                                        </label>
                                    </div>

                                    <button class="btn btn-primary" type="submit"><i class="fa fa-sign-in"></i> Login
                                    </button>
                                </div>

                            </form>

                        </div>
                        <div class="card-footer">
                            <div class="row no-gutters">
                                <a class="mr-auto" href="/register"><i class="fa fa-user-plus"></i> New here?
                                    Register
                                    now!</a>
                                <a href="{{ route('password.request') }}">
                                    Forgot Your Password?
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </main>
@endsection
