<template>

    <div class="row">
        <div class="col-md-12" v-if="currentUser || !isProfile">
            <div class="list-group list-group-flush" v-if="added.length">
                <experience-item v-for="(item, index) in added" :key="index"
                                 :experienceItem="item" :editable="editable || !isProfile"
                                 @expItemEdit="editExpItem(item,index)"
                                 @expItemDelete="deleteExpItem(index)"></experience-item>
            </div>
            <div v-else>
                <list-message>No experience added!</list-message>
            </div>
        </div>
        <div class="col-md-12" v-else>
            <list-message>Not Authorized!</list-message>
        </div>

        <div class="form-group col-md-2" v-if="editable || !isProfile">
            <el-button @click="addExpDialogVisible = true" icon="el-icon-plus">Add Experience
            </el-button>
            <el-dialog title="Add Your Experience" :visible.sync="addExpDialogVisible" :append-to-body="true"
                       @close="experience={}" class="experience-dialog">
                <el-form :model="experience" :rules="rules" ref="experience">
                    <el-form-item label="Position" :label-width="formLabelWidth" prop="position">
                        <el-input v-model="experience.position" placeholder="Please input"
                                  auto-complete="true"></el-input>
                    </el-form-item>
                    <el-form-item label="Organization" :label-width="formLabelWidth" prop="organization_name">
                        <el-input v-model="experience.organization_name" placeholder="Organization"
                                  auto-complete="true"></el-input>
                    </el-form-item>
                    <el-form-item label="Period (Months)" :label-width="formLabelWidth">
                        <el-input-number size="small" v-model="experience.period" :min="1"></el-input-number>
                        <el-radio-group v-model="periodUnit" size="small">
                            <el-radio-button :label="1">Days</el-radio-button>
                            <el-radio-button :label="30">Months</el-radio-button>
                            <el-radio-button :label="365">Years</el-radio-button>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="Description" :label-width="formLabelWidth">
                        <el-input type="textarea" v-model="experience.desc"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="addExpDialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="addExp">Confirm</el-button>
                </span>
            </el-dialog>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                addExpDialogVisible: false,
                autocompletes: {},
                edit: false,
                experience: {
                    position: '',
                    organization_name: '',
                    period: 0,
                    desc: ''
                },
                periodUnit: 1,
                added: [],
                formLabelWidth: '120px',
                fileList: [],
                rules: {
                    position: [
                        {required: true, message: 'Please input Your position', trigger: 'blur'}
                    ],
                    organization_name: [
                        {required: true, message: 'Please input Organization Name', trigger: 'blur'}
                    ]
                },
                apiUrl: '/api/volunteer'+(this.user_id ? "/" + this.user_id : "")+'/experience',
                currentUser: false,
                editable: false
            }
        },
        props: {
            isProfile: {
                type: Boolean,
                default: () => (false)
            },
            user_id: {
                type: Number,
                default: () => (0)
            }
        },
        watch: {
            added: function (val, old) {
                this.$emit('experienceAdded', val);
            }
        },
        methods: {
            showExpDialog() {
                this.experience = {}
                this.edit = false
                this.addExpDialogVisible = true
            },
            addExp() {
                this.$refs['experience'].validate((valid) => {
                    if (valid) {
                        this.addExpDialogVisible = false;
                        const position = this.experience.position
                        const organization_name = this.experience.organization_name
                        const period = this.experience.period * this.periodUnit
                        const desc = this.experience.desc
                        if (this.isProfile) {
                            this.save({
                                position: position,
                                organization_name: organization_name,
                                period: period,
                                desc: desc,
                            }, this.edit);
                        } else {
                            if (this.edit === false) {
                                this.added.push({
                                    position: position,
                                    organization_name: organization_name,
                                    period: period,
                                    desc: desc,
                                })
                            }
                            else {
                                this.added[this.edit] = {
                                    position: position,
                                    organization_name: organization_name,
                                    period: period,
                                    desc: desc,
                                }
                            }
                        }
                        this.experience = {}
                        this.edit = false
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
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
                            this.added.push(response.data)
                        }).catch((response) => {
                        console.log(response)
                    }).finally(() => {
                        loading.close();
                    })
                }
            },
            editExpItem(item, index) {
                const expItem = item
                this.experience = expItem
                this.edit = index
                this.addExpDialogVisible = true;
            },
            deleteExpItem(index) {
                let deleting = true
                if (index > -1) {
                    if (this.isProfile) {
                        const loading = this.$loading({
                            lock: true,
                        });

                        axios.delete(this.apiUrl + "/" + this.added[index].id)
                            .then((response) => {
                                if (response.data && response.data.deleted)
                                    deleting = true
                            }).catch((response) => {
                            deleting = false
                            console.error(response.data)
                        }).finally(() => {
                            loading.close()
                        });
                    }
                    if (deleting)
                        this.$delete(this.added, index);
                }
            },
            loadOldItems() {
                axios.get(this.apiUrl)
                    .then((response) => {
                        //console.log(response.data)
                        this.added = response.data
                        for(let i = 0; i < this.added.length; i++) {
                            this.added[i].organization_name = this.added[i].organization
                        }
                    })
                    .catch(function (response) {
                        console.error(response);
                    });
            },
        },
        created() {
            if (this.isProfile) {
                window.currentUser().then((response) => {
                    this.currentUser = response.data
                    this.editable = Number.parseInt(this.currentUser.id) === this.user_id;
                })
                this.loadOldItems()
            }
        }
    };
</script>

<style scoped>
    .list-group {
        margin-bottom: 1rem;
    }
</style>