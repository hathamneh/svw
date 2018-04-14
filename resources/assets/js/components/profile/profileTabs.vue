<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
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
        data() {
            return {
                activeName: 'posts',
                memberships: [],
                oldCapabilities: [],
            };
        },
        props: {
            user_id: {
                type: Number,
                required: true
            },
            mode: String
        },
        methods: {
            handleClick(tab, event) {
                //console.log(tab, event);
            }
        },
        mounted() {

        }
    };
</script>
