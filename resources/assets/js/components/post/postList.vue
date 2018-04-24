<template>
    <div class="posts-group">
        <transition-group name="fade">
            <post :mode="mode" v-for="post in posts" :key="post.id" :post-data="post" @postDeleted="deletePost"></post>
        </transition-group>
    </div>
</template>

<script>
    import {EventBus} from "../../event-bus";

    export default {
        name: "post-list",
        components: {
            post: () => ({
                // The component to load (should be a Promise)
                component: import('../post/post'),
                // A component to use while the async component is loading
                loading: import('../shared/LoadingComponent'),
                // Delay before showing the loading component. Default: 200ms.
                error: import('../shared/LoadingComponent'),
                delay: 200,
                // The error component will be displayed if a timeout is
                // provided and exceeded. Default: Infinity.
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
