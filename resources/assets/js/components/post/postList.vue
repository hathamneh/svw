<template>
    <div>
        <div v-if="posts.length" class="posts-group">
            <transition-group name="fade">
                <post :mode="mode" v-for="post in posts" :key="post.id" :post-data="post"
                      @postDeleted="deletePost"></post>
            </transition-group>
        </div>
        <div v-else>
            <list-message>No Posts Yet!</list-message>
        </div>
    </div>
</template>

<script>
    import {EventBus} from "../../event-bus";

    export default {
        name: "post-list",
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
                if (this.newsfeed) {
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
