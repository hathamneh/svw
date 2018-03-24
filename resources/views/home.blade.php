@extends('layouts.app')

@section('content')
    <main>
        <div class="container pt-4">
            <div class="row">
                <div class="col-md-3">
                    <div class="home-sidebar-left sidebar-sticky">
                        <div class="sidebar_user-details">
                            <div class="sidebar_user-details__image">
                                <div class="avatar-thumb">
                                    <img src="{{ asset("/images/default-avatar.jpg") }}" alt="User" width="40">
                                </div>
                            </div>
                            <div class="sidebar_user-details__text">
                                <a href="{{ route("profile.main", ["username" => $user->username ]) }}">
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
                                    <div class="Post_action Post_action-like">
                                        <button class="btn-link btn">
                                            <svg viewBox="0 0 100 100">
                                                <use xlink:href="/images/unliked.svg"></use>
                                            </svg>
                                            <span
                                                    class="Post_action-number">20</span></button>
                                    </div>
                                    <div class="Post_action Post_action-comment">
                                        <button class="btn-link btn"><i class="far fa-comment-alt"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="posts-group-item Post">
                            <a href="#" class="Post_menu-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                     version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 14 14"
                                     style="enable-background:new 0 0 512 512;" xml:space="preserve" width="14px"
                                     height="14px">
                                    <g transform="translate(1 1)">
                                        <g>
                                            <g>
                                                <path d="M506.054,313.027c-15.36-20.48-30.72-20.48-68.267-0.853L364.4,357.4c-10.24,5.973-33.28,7.68-54.613,7.68     c4.267-7.68,2.56-17.067-5.12-28.16c-13.653-19.627-36.693-31.573-61.44-31.573h-33.28c-17.92,0-34.987-5.12-48.64-15.36     c-30.791-23.093-78.94,2.035-102.4,17.023v-17.876H-0.826V511h59.733v-25.6H169.84c17.067,0,34.987-1.707,52.053-2.56     l110.933-17.067c4.267,0,8.533-0.853,11.947-1.707c10.24-1.707,19.627-6.827,28.16-14.507l128.853-102.4     C512.027,338.627,513.734,323.267,506.054,313.027z M41.84,493.933h-25.6V306.2h25.6V319v166.4V493.933z M491.547,335.213     L361.84,435.907l-0.853,0.853c-5.12,5.973-11.947,9.387-19.627,10.24c-3.413,0.853-5.973,0.853-9.387,0.853l-112.64,17.067     c-16.213,2.56-33.28,3.413-49.493,3.413H58.907v-140.8c20.48-14.507,68.267-41.813,92.16-23.04     c16.213,11.947,36.693,18.773,58.88,18.773h33.28c19.627,0,37.547,8.533,48.64,24.747c3.413,5.12,4.267,10.24,3.413,11.947     c-2.56,4.267-12.8,5.973-23.893,6.827c-2.139,0-4.277,0-6.205,0c-1.169-0.55-2.525-0.853-4.035-0.853h-82.773     c-26.453,0-42.667,12.8-42.667,34.133c0,5.12,3.413,8.533,8.533,8.533c5.12,0,8.533-3.413,8.533-8.533     c0-4.267,0-17.067,25.6-17.067h82.773c0.015,0,0.028-0.002,0.043-0.002l-0.043,0.855c2.56,0,5.973,0,11.093,0     c0.853,0,2.56,0,4.267,0c40.107,0.853,77.653,0,97.28-10.24l73.387-45.227c35.84-17.92,39.253-13.653,46.08-3.413     C494.96,327.533,494.96,332.653,491.547,335.213z"
                                                      fill="#9e9e9e"/>
                                                    <path d="M157.894,191.853l109.227,93.013c1.707,1.707,4.267,2.56,6.827,2.56s5.12-0.853,6.827-2.56L389.147,191     c23.04-19.627,39.253-45.227,46.08-72.533c4.267-18.773,3.413-30.72,2.56-33.28C433.52,35.693,393.414-1,345.627-1     C314.054-1,287.6,20.333,272.24,44.227C256.88,20.333,229.574-1,198-1c-47.787,0-83.627,35.84-88.747,87.04     c-0.853,2.56-2.56,14.507,2.56,33.28C118.64,146.627,134.854,172.227,157.894,191.853z M126.32,87.747v-0.853     C130.587,45.08,159.6,16.067,198,16.067c29.867,0,54.613,24.747,65.707,49.493l7.68,17.92l7.68-17.92     c11.093-24.747,35.84-49.493,66.56-49.493c39.253,0,71.68,30.72,74.24,71.68c0,0,1.707,9.387-2.56,26.453     c-5.973,23.893-19.627,46.08-40.107,64l-104.107,89.6l-104.107-89.6c-20.48-17.92-34.133-40.107-40.107-64     C124.614,97.133,126.32,87.747,126.32,87.747z"
                                                          fill="#9e9e9e"/>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
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
                                    <div class="Post_action Post_action-like">
                                        <button class="btn-link btn"><i class="far fa-thumbs-up"></i><span
                                                    class="Post_action-number">20</span></button>
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
                                        <button class="btn-link btn"><i class="far fa-thumbs-up"></i><span
                                                    class="Post_action-number">20</span></button>
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
                                        <button class="btn-link btn"><i class="far fa-thumbs-up"></i><span
                                                    class="Post_action-number">20</span></button>
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
    </main>
@endsection
