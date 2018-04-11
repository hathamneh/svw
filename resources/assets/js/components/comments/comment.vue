<template>
    <div class="comments-group-item Comment">
        <a href="#" class="Comment_menu-icon">
            <i class="fas fa-angle-down"></i></a>
        <div class="Comment_profile-picture">
            <a :href="comment.user_url" class="avatar-thumb">
                <img :src="comment.profile_picture" alt="">
            </a>
        </div>
        <div class="Comment_content">
            <div class="Comment_content-top">
                <a :href="comment.user_url" class="Comment_username">{{ comment.name }}</a>
                <span class="Comment_date"> - <a href="#">{{ comment.created_at }}</a></span>
            </div>
            <div class="Comment_text">
                <nl2br tag="p" :text="comment.content"></nl2br>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "comment-item",
        data() {
            return {
                comment: this.commentData
            }
        },
        props: {
            commentData: Object,
            commentId: Number
        }
    }
</script>
