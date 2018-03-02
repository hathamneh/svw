@extends('layouts.app')

@section("after_body")
    <div class="bgimg"></div>
@endsection
@section("content")
    <div class="login-page row align-items-center">
        <div class="col s6 offset-s3">
            <div class="site-title">

                <h1>Social<br><span>Volunteer</span><br>Work</h1>

            </div>
            <div class="unloaded z-depth-4 grey lighten-2 row" style="display: block; padding: 32px 48px; border: 1px solid #EEE;">

                <form class="col s12" method="post" action="{{ route('login') }}">
                    {{ csrf_field() }}
                    <div class='row'>
                        <div class='col s12'>

                        </div>
                    </div>

                    <div class='row'>
                        <div class='input-field col s12'>
                            <input class='validate' type='email' name='email' id='email' />
                            <label for='email'>Enter your email</label>
                        </div>
                    </div>

                    <div class='row'>
                        <div class='input-field col s12'>
                            <input class='validate' type='password' name='password' id='password' />
                            <label for='password'>Enter your password</label>
                        </div>
                        <label style='float: right;'>
                            <a class='pink-text' href='{{ route('password.request') }}'><b>Forgot Password?</b></a>
                        </label>
                    </div>

                    <br />
                    <div class='row'>
                        <a href="#!" class='col s6 btn-flat waves-effect waves-red'>Create account</a>
                        <button type='submit' name='btn_login' class='col s6 btn waves-effect red'>Login</button>
                    </div>
                </form>
            </div>

            {{--<div class="login-form ">
                <h2>Login to your account</h2>
                <div class="social-login row align-items-center">
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
                    <span>OR</span>
                    <hr>
                </div>
                <form class="form-horizontal" method="POST" action="{{ route('login') }}">
                    {{ csrf_field() }}
                    <div class="form-group row align-items-center{{ $errors->has('email') ? ' has-error' : '' }}">
                        <label for="email" class="control-label col-md-3">Email: </label>
                        <div class="col-md-9">
                            <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}"
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
                            <input id="password" type="password" class="form-control" name="password"
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
                                <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> Remember
                                Me
                            </label>
                        </div>

                        <button class="btn btn-primary" type="submit"><i class="fa fa-sign-in"></i> Login
                        </button>
                    </div>
                    <div class="form-group row no-gutters">
                        <a class="mr-auto" href="/register"><i class="fa fa-user-plus"></i> New here? Register now!</a>
                        <a href="{{ route('password.request') }}">
                            Forgot Your Password?
                        </a>
                    </div>
                </form>

            </div>--}}
        </div>

    </div>
@endsection
