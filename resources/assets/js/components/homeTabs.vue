<template>
    <b-tabs pills class="nav-fill newsfeed-tabs">
        <b-tab active>
            <template slot="title">
                <i class="image-icon mx-2"><img src="/images/post-icon.svg" alt=""></i>{{ trans('Posts') }}
            </template>
            <new-post></new-post>
            <post-list :newsfeed="true"></post-list>
        </b-tab>
        <b-tab>
            <template slot="title">
                <i class="fa fa-calendar mx-2"></i>{{ trans('Events') }}
            </template>

            <event-list :feed="true"></event-list>
        </b-tab>
    </b-tabs>
</template>

<script>

    export default {
        name: "homeTabs",
        components: {
            EventList: () => ({
                component: import('./events/eventList'),
                loading: import('./shared/LoadingComponent'),
                error: import('./shared/LoadingComponent'),
                delay: 200,
                timeout: 3000
            }),
            postList: () => ({
                component: import('./post/postList'),
                loading: import('./shared/LoadingComponent'),
                error: import('./shared/LoadingComponent'),
                delay: 200,
                timeout: 3000
            })
        },
        created() {

        }
    }
</script>