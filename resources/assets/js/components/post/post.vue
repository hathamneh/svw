<template>
    <transition name="fade" mode="out-in">
        <div class="posts-group-item Post">
            <a href="#" class="Post_menu-icon">
                <i class="fas fa-angle-down"></i></a>
            <div class="Post_profile-picture">
                <a href="#" class="avatar-thumb">
                    <img :src="postData.volunteer.profile_picture" alt="">
                </a>
            </div>
            <div class="Post_content">
                <div class="Post_content-top">
                    <a href="#" class="Post_username">{{ postData.volunteer.full_name }}</a>
                    <span class="Post_date"> - <a href="#">{{ postData.created_at }}</a></span>
                </div>
                <div class="Post_text">
                    {{ postData.content }}
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
    </transition>
</template>

<script>
    export default {
        name: "post",
        props: {
            postData: {
                type: Object
            },
            postId: {
                type: Number
            }
        }
    }
</script>
