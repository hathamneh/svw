<template>
    <b-tabs pills class="nav-fill newsfeed-tabs">
        <b-tab :title="trans('Latest Posts')" active>
        <new-post></new-post>
        <post-list :newsfeed="true"></post-list>
        </b-tab>
        <b-tab :title="trans('Latest Events')">
        Tab Contents 2
        </b-tab>
    </b-tabs>
</template>

<script>
    export default {
        name: "homeTabs",
        components: {
            postList: () => ({
                component: import('./post/postList'),
                loading: import('./shared/LoadingComponent'),
                error: import('./shared/LoadingComponent'),
                delay: 200,
                timeout: 3000
            })
        }
    }
</script>