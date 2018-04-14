<template>
    <el-tabs v-model="activeName">
        <el-tab-pane label="Posts" name="posts">
            <new-post v-if="mode == 'self'"></new-post>
            <post-list :mode="mode" :user-id="user_id"></post-list>
        </el-tab-pane>
        <el-tab-pane label="Events" name="events">Events</el-tab-pane>
        <el-tab-pane label="Members" name="membership">Members</el-tab-pane>
    </el-tabs>
</template>

<script>
    export default {
        name: "organizationTabs",
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
