<template>
    <el-tabs tab-position="left">
        <el-tab-pane>
            <span slot="label"><b>Courses</b> <i class="fa fa-graduation-cap"></i></span>
            <add-more :type="types.course" message="Add courses you have taken"
                      @capabilitiesUpdated="(val) => { pushCaps(val) }"></add-more>
        </el-tab-pane>
        <el-tab-pane>
            <span slot="label"><b>Certificates</b> <i class="fa fa-certificate"></i></span>
            <add-more :type="types.certificate" message="Add names of certificates you have"
                      @capabilitiesUpdated="(val) => { pushCaps(val) }"></add-more>
        </el-tab-pane>
        <el-tab-pane>
            <span slot="label"><b>Projects</b> <i class="fa fa-cogs"></i></span>
            <add-more :type="types.project" message="Add your projects"
                      @capabilitiesUpdated="(val) => { pushCaps(val) }"></add-more>
        </el-tab-pane>
        <el-tab-pane>
            <span slot="label"><b>Languages</b> <i class="fa fa-globe"></i></span>
            <add-more :type="types.language" message="What languages can you speak?"
                      @capabilitiesUpdated="(val) => { pushCaps(val) }"></add-more>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
                caps: [],
                types: {
                    course: {
                        name: "course",
                        modal: [
                            {name: "crs_name", label: "Name", "placeholder": "Enter course name"},
                            {name: "crs_from", label: "Given by", "placeholder": "Who has given oy yo you?"}
                        ]
                    },
                    certificate: {
                        name: "certificate",
                        modal: [
                            {name: "crt_name", label: "Name", "placeholder": "Enter certificate name"},
                            {name: "crt_from", label: "Given by", "placeholder": "Who has given oy yo you?"},
                            {name: "crt_url", label: "Url", "placeholder": "input url"}
                        ]
                    },
                    project: {
                        name: "project",
                        modal: [
                            {name: "prj_name", label: "Name", "placeholder": "Enter project name"},
                            {
                                name: "prj_desc",
                                label: "description",
                                "placeholder": "Who has given oy yo you?",
                                type: "textarea"
                            },
                            {name: "prj_url", label: "Url", "placeholder": "input url"}
                        ]
                    },
                    language: {
                        name: "language",
                        modal: [
                            {name: "lng_name", label: "Name", "placeholder": "Enter Language"},
                            {name: "lng_level", label: "Level", "placeholder": "Native, Excellent, Good?"},
                        ]
                    }
                }
            };
        },
        methods: {
            pushCaps(val) {
                this.caps.push(val);
            }
        },
        watch: {
            caps: {
                handler(val) {
                    this.$emit("newCaps", val);
                },
                deep: true
            }
        }
    }
</script>