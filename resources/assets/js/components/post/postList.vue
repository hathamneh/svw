<template>
    <div class="posts-group">
        <post v-for="(post, key) in posts" :key="key" :post-data="post"></post>
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
            }
        },
        methods: {
            loadPosts() {
                let postsFor = "";
                if (this.userId)
                    postsFor = "/" + this.userId
                axios.get("/api/posts" + postsFor)
                    .then((res) => {
                        if (res.data && Array.isArray(res.data)) {
                            this.posts = res.data;
                        }
                    })
            },
            addPost(postData) {
                this.posts.push(postData)
            }
        },
        mounted() {
            this.loadPosts()
            EventBus.$on("postAdded", this.addPost)
        }
    }
</script>
