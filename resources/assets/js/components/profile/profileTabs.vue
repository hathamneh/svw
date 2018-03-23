<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Posts" name="posts">
            <div class="new-post">
                <div class="new-post_avatar">
                    <div class="avatar-thumb">
                        <img src="/images/default-avatar.jpg" alt="User Name">
                    </div>
                </div>
                <div class="new-post_content">
                    <textarea name="post_text" id="post_text" cols="30" rows="1" class="form-control"
                              placeholder="What is your status"></textarea>
                    <div class="new-post_actions">
                        <div class="add-post-attachment">
                            <button class="btn btn-primary btn-sm" title="Upload Image"><i class="fa fa-image"></i></button>
                        </div>
                        <button class="btn btn-light btn-sm btn-publish">Post</button>
                    </div>
                </div>
            </div>
        </el-tab-pane>
        <el-tab-pane label="Membership" name="membership">Membership</el-tab-pane>
        <el-tab-pane label="Experience" name="experience">
            <w-experience :is-profile="true" :user_id="user_id"></w-experience>
        </el-tab-pane>
        <el-tab-pane label="Education" name="education">
            <w-education :is-profile="true" :user_id="user_id"></w-education>
            <!--<education-item :educationItem="{field_of_study:'Computer Engineering', school:'University of Jordan', gdate:'2018-5-30'}"></education-item>-->
        </el-tab-pane>
        <el-tab-pane label="More" name="more">More</el-tab-pane>
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
            }
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
