<template>
    <div class="posts-group-item Post">
        <a href="#" class="Post_menu-icon">
            <i class="fas fa-angle-down"></i></a>
        <div class="Post_profile-picture">
            <a href="#" class="avatar-thumb">
                <img :src="post.profile_picture" alt="">
            </a>
        </div>
        <div class="Post_content">
            <div class="Post_content-top">
                <a href="#" class="Post_username">{{ post.name }}</a>
                <span class="Post_date"> - <a href="#">{{ post.created_at }}</a></span>
            </div>
            <div class="Post_text">
                {{ post.content }}
            </div>
            <div class="Post_actions">
                <div :class="['Post_action', 'Post_action-like', post.liked ? 'liked' : '']">
                    <button class="btn-link btn" @click="likePost($event)">
                        <img src="/images/like.svg" alt="">
                        <span class="Post_action-number">{{ post.likes }}</span></button>
                </div>
                <div class="Post_action Post_action-comment">
                    <button class="btn-link btn"><i class="far fa-comment-alt"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "post",
        data() {
            return {
                post: this.postData
            }
        },
        props: {
            postData: {
                type: Object
            },
            postId: {
                type: Number
            }
        },
        methods: {
            likePost(event) {
                let $target = $(event.target).closest(".Post_action-like");
                let url = "/api/post/like/"
                if($target.hasClass("liked")) {
                    url = "/api/post/unlike/"
                    this.post.likes--;
                } else {
                    this.post.likes++;
                }
                $target.toggleClass("liked");

                if (this.post && this.post.id) {
                    let postId = this.post.id
                    axios.post(url + postId)
                        .then((res) => {
                            if (res.data && !res.data.success)
                                $(event.target).closest(".Post_action-like").toggleClass("liked");
                        })
                        .catch(() => {
                            $(event.target).closest(".Post_action-like").toggleClass("liked");
                        })
                }
            }
        },
        mounted() {

        }
    }
</script>
