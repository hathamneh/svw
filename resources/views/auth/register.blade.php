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
                                <div class="sites-links">
                                    <a href="/redirect/facebook" class="login-btn fb-login col-sm-6">
                                        <i class="fab fa-facebook"></i> Facebook
                                    </a>
                                    <a href="/redirect/google" class="login-btn google-login col-sm-6">
                                        <i class="fab fa-google"></i> Google
                                    </a>
                                </div>
                            </div>
                            <div class="divider">
                                <hr>
                                <span>OR</span>
                            </div>
                            <form class="form-horizontal" method="POST" action="{{ route('register') }}">
                                {{ csrf_field() }}
                                <div class="form-group row align-items-center">
                                    <label for="username" class="col-md-4 control-label">Username</label>

                                    <div class="col-md-8">
                                        <input id="username" type="text" class="form-control" name="register_username" value="{{ old('username') }}"
                                               required autofocus placeholder="Username...">

                                        @if ($errors->has('register_username'))
                                            <span class="help-block text-danger">
                                        <strong>{{ $errors->first('register_username') }}</strong>
                                    </span>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group row align-items-center">
                                    <label for="email" class="col-md-4 control-label">E-Mail Address</label>

                                    <div class="col-md-8">
                                        <input id="email" type="email" class="form-control" name="register_email" value="{{ old('email') }}"
                                               required placeholder="Email...">

                                        @if ($errors->has('register_email'))
                                            <span class="help-block text-danger">
                                        <strong>{{ $errors->first('register_email') }}</strong>
                                    </span>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group row align-items-center">
                                    <label for="password" class="col-md-4 control-label">Password</label>

                                    <div class="col-md-8">
                                        <input id="password" type="password" class="form-control" name="register_password"
                                               required placeholder="Choose your password...">

                                        @if ($errors->has('register_password'))
                                            <span class="help-block text-danger">
                                        <strong>{{ $errors->first('register_password') }}</strong>
                                    </span>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group row align-items-center">
                                    <label for="password-confirm" class="col-md-4 control-label">Confirm Password</label>

                                    <div class="col-md-8">
                                        <input id="password-confirm" type="password" class="form-control" name="register_password_confirmation"
                                               required placeholder="Re-Enter your password...">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-md-8 offset-4">
                                        <button type="submit" class="btn btn-primary">
                                            Register
                                        </button>
                                    </div>
                                </div>
                            </form>

                        </div>
                        <div class="card-footer">
                            <div class="row no-gutters">
                                <a class="mr-auto" href="/login"><i class="fa fa-key"></i> Do you have an account?
                                    Login Instead</a>
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
