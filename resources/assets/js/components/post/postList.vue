<template>
    <div class="posts-group">
        <post v-for="(post, key) in posts" :key="key" :post-data="post"></post>
    </div>
</template>

<script>
    export default {
        name: "post-list",
        data() {
            return {
                posts: []
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
                        if(res.data && Array.isArray(res.data)) {
                            this.posts = res.data;
                        }
                    })
            }
        },
        mounted() {
            this.loadPosts()
        }
    }
</script>
