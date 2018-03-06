<template>
    <div class="col-md-6">
        <b>Experience</b><br>
        <span style="font-size: 0.8rem;">Do you have any previous experience in a voluntary organization?</span>
        <hr>
        <div class="row">
            <div class="col-md-12">
                <div class="list-group list-group-flush" v-if="added.length">
                    <experience-item v-for="(item, index) in added" :experienceItem="item" :key="index"
                                     @expItemEdit="editExpItem(item,index)"
                                     @expItemDelete="deleteExpItem(index)"></experience-item>
                </div>
            </div>
            <div class="form-group col-md-2">
                <el-button @click="addExpDialogVisible = true" icon="el-icon-plus">Add Experience
                </el-button>
                <el-dialog title="Add Your Experience" :visible.sync="addExpDialogVisible" :append-to-body="true"
                           @close="experience={}">
                    <el-form :model="experience" :rules="rules" ref="experience">
                        <el-form-item label="Position" :label-width="formLabelWidth" prop="position">
                            <el-input v-model="experience.position" placeholder="Please input"
                                      auto-complete="true"></el-input>
                        </el-form-item>
                        <el-form-item label="Organization" :label-width="formLabelWidth" prop="organization">
                            <el-input v-model="experience.organization" placeholder="Organization"
                                      auto-complete="true"></el-input>
                        </el-form-item>
                        <el-form-item label="Period (Months)" :label-width="formLabelWidth">
                            <el-input-number v-model="experience.period" :min="1"></el-input-number>
                        </el-form-item>
                        <el-form-item label="Description" :label-width="formLabelWidth">
                            <el-input type="textarea" v-model="experience.desc"></el-input>
                        </el-form-item>
                        <el-form-item label="Attachment" :label-width="formLabelWidth">
                            <el-upload
                                    class="upload-demo"
                                    action="/upload"
                                    :on-preview="handlePreview"
                                    :on-remove="handleRemove"
                                    :before-remove="beforeRemove"
                                    :on-exceed="handleExceed"
                                    :file-list="fileList">
                                <el-button size="small" type="primary">Click to upload</el-button>
                            </el-upload>
                        </el-form-item>
                    </el-form>
                    <span slot="footer" class="dialog-footer">
                            <el-button @click="addExpDialogVisible = false">Cancel</el-button>
                            <el-button type="primary" @click="addExp">Confirm</el-button>
                        </span>
                </el-dialog>
            </div>
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
                    organization: '',
                    period: 0,
                    desc: ''
                },
                added: [],
                formLabelWidth: '120px',
                fileList: [],
                rules: {
                    position: [
                        {required: true, message: 'Please input Your position', trigger: 'blur'}
                    ],
                    organization: [
                        {required: true, message: 'Please input Organization Name', trigger: 'blur'}
                    ]
                }
            }
        },
        watch: {
            added: function(val, old) {
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
                        const organization = this.experience.organization
                        const period = this.experience.period * 30
                        const desc = this.experience.desc
                        if (this.edit === false) {
                            this.added.push({
                                position: position,
                                organization: organization,
                                period: period,
                                desc: desc,
                            })
                        }
                        else {
                            this.added[this.edit] = {
                                position: position,
                                organization: organization,
                                period: period,
                                desc: desc,
                            }
                        }
                        this.experience = {}
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            editExpItem(item, index) {
                const expItem = item
                this.experience = expItem
                this.edit = index
                this.addExpDialogVisible = true;
            },
            deleteExpItem(index) {
                if (index > -1)
                    this.$delete(this.added, index);
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`The limit is 3, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`Delete ${ file.name }？`);
            }
        }
    };
</script>

<style scoped>
    .list-group {
        margin-bottom: 1rem;
    }
</style>