<template>
    <el-tabs tab-position="left" @deleteCapItem="deleteItem(id)">
        <el-tab-pane>
            <span slot="label"><b>Skills</b> <i class="fa fa-lightbulb-o"></i></span>
            <add-more :editable="editable" :type="types.skills" :old-items="caps.skills"
                      message="What skills do you have?"
                      @capabilitiesUpdated="(val) => { pushCaps(val) }"></add-more>
        </el-tab-pane>
        <el-tab-pane>
            <span slot="label"><b>Courses</b> <i class="fa fa-graduation-cap"></i></span>
            <add-more :editable="editable" :type="types.course" :old-items="caps.courses"
                      message="Add courses you have taken"
                      @capabilitiesUpdated="(val) => { pushCaps(val) }"></add-more>
        </el-tab-pane>
        <el-tab-pane>
            <span slot="label"><b>Certificates</b> <i class="fa fa-certificate"></i></span>
            <add-more :editable="editable" :type="types.certificate" :old-items="caps.certificates"
                      message="Add names of certificates you have"
                      @capabilitiesUpdated="(val) => { pushCaps(val) }"></add-more>
        </el-tab-pane>
        <el-tab-pane>
            <span slot="label"><b>Projects</b> <i class="fa fa-cogs"></i></span>
            <add-more :editable="editable" :type="types.project" :old-items="caps.projects"
                      message="Add your projects"
                      @capabilitiesUpdated="(val) => { pushCaps(val) }"></add-more>
        </el-tab-pane>
        <el-tab-pane>
            <span slot="label"><b>Languages</b> <i class="fa fa-globe"></i></span>
            <add-more :editable="editable" :type="types.language" :old-items="caps.languages"
                      message="What languages can you speak?"
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
                newCaps: {
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
                                placeholder: "Talk about your project",
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
                },
                apiUrl: '/api/volunteer' + (this.userId ? "/" + this.userId : "") + '/capability',
                currentUser: false,
                editable: !this.isProfile,
            };
        },
        props: {
            isProfile: {
                type: Boolean,
                default: () => (false)
            },
            userId: {
                type: Number,
                default: () => (0)
            }
        },
        methods: {
            pushCaps(val) {
                let type = val.type;
                if (this.isProfile)
                    this.save(val, false)
                else
                    this.newCaps[type].push(val.value);

            },
            save(item, update) {
                const loading = this.$loading({
                    lock: true,
                });
                if (update !== false) {
                    axios.put(this.apiUrl, item)
                        .then((response) => {
                            this.added[update] = response.data

                        }).catch((response) => {
                        console.log(response)
                    }).finally(() => {
                        loading.close();
                    })
                } else {
                    axios.post(this.apiUrl, item)
                        .then((response) => {
                            //this.caps[response.data.type].push(response.data.value);
                            console.log(response)
                        }).catch((response) => {
                        console.log(response)
                    }).finally(() => {
                        loading.close();
                    })
                }
            },
            deleteItem(id) {
                if(id && id > 0)
                    axios.delete(this.apiUrl + "/" + id)
            },
            loadOldItems() {
                axios.get(this.apiUrl)
                    .then((response) => {
                        console.log(response.data)
                        this.caps = response.data
                    })
                    .catch(function (response) {
                        logError(response.data, "unauthorized")
                        this.currentUser = false
                    });
            },
        },
        watch: {
            newCaps: {
                handler(val) {
                    this.$emit("newCaps", val);
                },
                deep: true
            }
        },
        mounted() {
            if (this.isProfile) {
                window.currentUser().then((response) => {
                    this.currentUser = response.data
                    this.editable = Number.parseInt(this.currentUser.id) === this.userId;
                }).catch((response) => {
                    logError(response.data, "unauthorized")
                })
                this.loadOldItems()
            }
        }
    }
</script>