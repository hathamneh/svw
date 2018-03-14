<template>
    <el-tabs tab-position="left">
        <el-tab-pane>
            <span slot="label"><b>Skills</b> <i class="fa fa-lightbulb-o"></i></span>
            <add-more :type="types.skills" message="What skills do you have?"
                      @capabilitiesUpdated="(val) => { pushCaps(val) }"></add-more>
        </el-tab-pane>
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
                caps: {
                    skills: [],
                    courses: [],
                    certificates: [],
                    projects: [],
                    languages: []
                },
                types: {
                    skills: {
                        name: "skills",
                        modal: [
                            {name: "name", label: "Skill Name", "placeholder": "Enter skill name"},
                        ]
                    },
                    course: {
                        name: "courses",
                        modal: [
                            {name: "name", label: "Name", "placeholder": "Enter course name"},
                            {name: "from", label: "Given by", "placeholder": "Who has given it to you?"}
                        ]
                    },
                    certificate: {
                        name: "certificates",
                        modal: [
                            {name: "name", label: "Name", "placeholder": "Enter certificate name"},
                            {name: "from", label: "Given by", "placeholder": "Who has given it to you?"},
                            {name: "url", label: "Url", "placeholder": "input url"}
                        ]
                    },
                    project: {
                        name: "projects",
                        modal: [
                            {name: "name", label: "Name", "placeholder": "Enter project name"},
                            {
                                name: "desc",
                                label: "description",
                                "placeholder": "Who has given oy yo you?",
                                type: "textarea"
                            },
                            {name: "url", label: "Url", "placeholder": "input url"}
                        ]
                    },
                    language: {
                        name: "languages",
                        modal: [
                            {name: "name", label: "Name", "placeholder": "Enter Language"},
                            {name: "level", label: "Level", "placeholder": "Native, Excellent, Good?"},
                        ]
                    }
                }
            };
        },
        methods: {
            pushCaps(val) {
                let type = val.type;
                this.caps[type].push(val.value);
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