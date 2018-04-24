<template>
    <el-tabs v-model="activeName">
        <el-tab-pane label="Posts" name="posts">
            <new-post v-if="mode == 'self'"></new-post>
            <post-list :mode="mode" :user-id="user_id"></post-list>
        </el-tab-pane>
        <el-tab-pane label="Membership" name="membership">Membership</el-tab-pane>
        <el-tab-pane label="Experience" name="experience">
            <w-experience :is-profile="true" :user_id="user_id"></w-experience>
        </el-tab-pane>
        <el-tab-pane label="Education" name="education">
            <w-education :is-profile="true" :user_id="user_id"></w-education>
            <!--<education-item :educationItem="{field_of_study:'Computer Engineering', school:'University of Jordan', gdate:'2018-5-30'}"></education-item>-->
        </el-tab-pane>
        <el-tab-pane label="More" name="more">
            <w-more :is-profile="true" :user-id="user_id"></w-more>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    export default {
        name: "volunteerTabs",
        components: {
            postList: () => ({
                // The component to load (should be a Promise)
                component: import('../post/postList'),
                // A component to use while the async component is loading
                loading: require('../shared/LoadingComponent'),
                // Delay before showing the loading component. Default: 200ms.
                error: require('../shared/LoadingComponent'),
                delay: 200,
                // The error component will be displayed if a timeout is
                // provided and exceeded. Default: Infinity.
                timeout: 3000
            })
        },
        data() {
            return {
                activeName: 'posts',
                memberships: [],
                oldCapabilities: [],
            }
        },
        props: {
            user_id: {
                type: Number,
                required: true
            },
            mode: String
        }
    }
</script>
