@extends('layouts.app')

@section('content')
    <?php /** @var \App\Volunteer $volunteer */ ?>

    <div class="container pt-4">
        <div class="row">
            <div class="col-md-3">
                <div class="home-sidebar-left sidebar-sticky">
                    <div class="sidebar_user-details">
                        <div class="sidebar_user-details__image">
                            <div class="avatar-thumb">
                                <img src="{{ asset("/images/default-avatar.jpg") }}" alt="User">
                            </div>
                        </div>
                        <div class="sidebar_user-details__text">
                            <a href="{{ $volunteer->profile_url }}">
                                <div>{{ $volunteer->full_name }}</div>
                            </a>
                            <small>{{ "@" . $user->username }}</small>
                        </div>
                    </div>
                    <profile-numbers class="profile-numbers-sm"></profile-numbers>
                </div>
            </div>
            <div class="col-md-7">
                <new-post></new-post>
                <div class="posts-group">
                    <div class="posts-group-item Post">
                        <a href="#" class="Post_menu-icon"><i class="fas fa-angle-down"></i></a>
                        <div class="Post_profile-picture">
                            <a href="#" class="avatar-thumb">
                                <img src="/images/default-avatar.jpg" alt="">
                            </a>
                        </div>
                        <div class="Post_content">
                            <div class="Post_content-top">
                                <a href="#" class="Post_username">User Name</a>
                                <span class="Post_date"> - <a href="#">6h</a></span>
                            </div>
                            <div class="Post_text">
                                Content of post will be shown exactly here in this box in the page and if there is
                                an image will be visible here too.
                            </div>
                            <div class="Post_actions">
                                <div class="Post_action Post_action-like unliked">
                                    <button class="btn-link btn">
                                        <img src="/images/like.svg" alt="">
                                        <span class="Post_action-number">20</span></button>
                                </div>
                                <div class="Post_action Post_action-comment">
                                    <button class="btn-link btn"><i class="far fa-comment-alt"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="posts-group-item Post">
                        <a href="#" class="Post_menu-icon">
                            <i class="fas fa-angle-down"></i></a>
                        <div class="Post_profile-picture">
                            <a href="#" class="avatar-thumb">
                                <img src="/images/default-avatar.jpg" alt="">
                            </a>
                        </div>
                        <div class="Post_content">
                            <div class="Post_content-top">
                                <a href="#" class="Post_username">User Name</a>
                                <span class="Post_date"> - <a href="#">6h</a></span>
                            </div>
                            <div class="Post_text">
                                Content of post will be shown exactly here in this box in the page and if there is
                                an image will be visible here too.
                            </div>
                            <div class="Post_actions">
                                <div class="Post_action Post_action-like liked">
                                    <button class="btn-link btn">
                                        <img src="/images/like.svg" alt="">
                                        <span class="Post_action-number">20</span></button>
                                </div>
                                <div class="Post_action Post_action-comment">
                                    <button class="btn-link btn"><i class="far fa-comment-alt"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="posts-group-item Post">
                        <a href="#" class="Post_menu-icon"><i class="fas fa-angle-down"></i></a>
                        <div class="Post_profile-picture">
                            <a href="#" class="avatar-thumb">
                                <img src="/images/default-avatar.jpg" alt="">
                            </a>
                        </div>
                        <div class="Post_content">
                            <div class="Post_content-top">
                                <a href="#" class="Post_username">User Name</a>
                                <span class="Post_date"> - <a href="#">6h</a></span>
                            </div>
                            <div class="Post_text">
                                Content of post will be shown exactly here in this box in the page and if there is
                                an image will be visible here too.
                            </div>
                            <div class="Post_actions">
                                <div class="Post_action Post_action-like">
                                    <button class="btn-link btn">
                                        <img src="/images/like.svg" alt="">
                                        <span class="Post_action-number">20</span></button>
                                </div>
                                <div class="Post_action Post_action-comment">
                                    <button class="btn-link btn"><i class="far fa-comment-alt"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="posts-group-item Post">
                        <a href="#" class="Post_menu-icon"><i class="fas fa-angle-down"></i></a>
                        <div class="Post_profile-picture">
                            <a href="#" class="avatar-thumb">
                                <img src="/images/default-avatar.jpg" alt="">
                            </a>
                        </div>
                        <div class="Post_content">
                            <div class="Post_content-top">
                                <a href="#" class="Post_username">User Name</a>
                                <span class="Post_date"> - <a href="#">6h</a></span>
                            </div>
                            <div class="Post_text">
                                Content of post will be shown exactly here in this box in the page and if there is
                                an image will be visible here too.
                            </div>
                            <div class="Post_actions">
                                <div class="Post_action Post_action-like">
                                    <button class="btn-link btn">
                                        <img src="/images/like.svg" alt="">
                                        <span class="Post_action-number">20</span></button>
                                </div>
                                <div class="Post_action Post_action-comment">
                                    <button class="btn-link btn"><i class="far fa-comment-alt"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="posts-group-item Post">
                        <a href="#" class="Post_menu-icon"><i class="fas fa-angle-down"></i></a>
                        <div class="Post_profile-picture">
                            <a href="#" class="avatar-thumb">
                                <img src="/images/default-avatar.jpg" alt="">
                            </a>
                        </div>
                        <div class="Post_content">
                            <div class="Post_content-top">
                                <a href="#" class="Post_username">User Name</a>
                                <span class="Post_date"> - <a href="#">6h</a></span>
                            </div>
                            <div class="Post_text">
                                Content of post will be shown exactly here in this box in the page and if there is
                                an image will be visible here too.
                            </div>
                            <div class="Post_actions">
                                <div class="Post_action Post_action-like liked">
                                    <button class="btn-link btn">
                                        <img src="/images/like.svg" alt="">
                                        <span class="Post_action-number">20</span></button>
                                </div>
                                <div class="Post_action Post_action-comment">
                                    <button class="btn-link btn"><i class="far fa-comment-alt"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <div class="sidebar-home-right sidebar-sticky">
                    <small class="text-muted"><b>Suggestions</b></small>
                    <div class="suggestion-item demo">

                    </div>
                    <div class="suggestion-item demo">

                    </div>
                    <hr>
                    <small style="font-size: 0.65rem;" class="text-muted"><b>All rights reserved &copy; SVW 2018</b>
                    </small>
                </div>
            </div>
        </div>
    </div>

@endsection
