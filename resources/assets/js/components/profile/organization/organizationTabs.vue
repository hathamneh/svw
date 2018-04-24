<template>
    <el-tabs v-model="activeName">
        <el-tab-pane label="Posts" name="posts">
            <new-post v-if="mode === 'self'"></new-post>
            <post-list :mode="mode" :user-id="user_id"></post-list>
        </el-tab-pane>
        <el-tab-pane label="Events" name="events">
            <event-list :user-id="user_id"></event-list>
        </el-tab-pane>
        <el-tab-pane label="Members" name="members">
            <members :user-id="user_id"></members>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    export default {
        name: "organizationTabs",
        components: {
            postList: require('../../post/postList'),
            eventList: require('../../events/eventList'),
            Members: require('./members')
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
