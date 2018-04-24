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
                // The component to load (should be a Promise)
                component: import('./post/postList'),
                // A component to use while the async component is loading
                loading: require('./shared/LoadingComponent'),
                // Delay before showing the loading component. Default: 200ms.
                error: require('./shared/LoadingComponent'),
                delay: 200,
                // The error component will be displayed if a timeout is
                // provided and exceeded. Default: Infinity.
                timeout: 3000
            })
        }
    }
</script>