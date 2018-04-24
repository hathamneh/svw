<template>
    <div class="posts-group">
        <transition-group name="fade">
            <post-item :mode="mode" v-for="post in posts" :key="post.id" :post-data="post" @postDeleted="deletePost"></post-item>
        </transition-group>
    </div>
</template>

<script>
    import {EventBus} from "../../event-bus";

    export default {
        name: "post-list",
        components: {
            postItem: () => ({
                component: import('../post/post'),
                loading: import('../shared/LoadingComponent'),
                error: import('../shared/LoadingComponent'),
                delay: 200,
                timeout: 3000
            })
        },
        data() {
            return {
                posts: [],
            }
        },
        props: {
            userId: {
                type: Number,
                required: false
            },
            mode: String,
            newsfeed: Boolean
        },
        methods: {
            loadPosts() {
                if(this.newsfeed) {
                    axios.get("/api/feed/posts")
                        .then((res) => {
                            if (res.data && Array.isArray(res.data)) {
                                this.posts = res.data;
                            }
                        })
                } else {
                    let postsFor = "";
                    if (this.userId)
                        postsFor = "/" + this.userId
                    axios.get("/api/posts" + postsFor)
                        .then((res) => {
                            if (res.data && Array.isArray(res.data)) {
                                this.posts = res.data;
                            }
                        })
                }
            },
            addPost(postData) {
                this.posts.unshift(postData)
            },
            deletePost(id) {
                this.posts = this.posts.filter(n => {
                    return n.id !== id
                })
            }
        },
        mounted() {
            this.loadPosts()
            EventBus.$on("postAdded", this.addPost)
        }
    }
</script>
