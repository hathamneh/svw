<template>
    <div class="col-md-6">
        <b>Education</b><br>
        <span style="font-size: 0.8rem;">What major you are studying?</span>
        <hr>
        <div class="row">
            <div class="col-md-12">
                <div class="list-group list-group-flush" v-if="added.length">
                    <transition-group name="fade" tag="div">
                        <education-item v-for="(item, index) in added" :educationItem="item" :key="index"
                                        @eduItemEdit="editEduItem(item,index)"
                                        @eduItemDelete="deleteEduItem(index)"></education-item>
                    </transition-group>
                </div>
            </div>
            <div class="form-group col-md-2">
                <el-button @click="addEduDialogVisible = true" icon="el-icon-plus">Add Education
                </el-button>
                <el-dialog title="Add Your Education" :visible.sync="addEduDialogVisible" :append-to-body="true"
                           @close="education={}">
                    <el-form :model="education" :rules="educationRules" ref="education">
                        <el-form-item label="Study Field" :label-width="formLabelWidth" prop="field_of_study">
                            <el-autocomplete
                                    v-model="education.field_of_study"
                                    :fetch-suggestions="majorSearch"
                                    placeholder="Please input"
                                    :trigger-on-focus="true"
                                    style="width: 100%;">
                            </el-autocomplete>
                        </el-form-item>
                        <el-form-item label="School" :label-width="formLabelWidth" prop="school">
                            <el-autocomplete
                                    v-model="education.school"
                                    :fetch-suggestions="schoolSearch"
                                    placeholder="School"
                                    :trigger-on-focus="true"
                                    style="width: 100%;" prop="school">
                            </el-autocomplete>
                        </el-form-item>
                        <el-form-item label="Graduation Date" :label-width="formLabelWidth" prop="gdate">
                            <el-date-picker type="date" v-model="education.gdate" value-format="dd/MM/yyyy"
                                            placeholder="Graduation Date">
                            </el-date-picker>
                        </el-form-item>
                        <span class="gdate-help">If you are not graduated yet, enter the expected date.</span>
                    </el-form>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="addEduDialogVisible = false">Cancel</el-button>
                        <el-button type="primary" @click="addEdu">Confirm</el-button>
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
                addEduDialogVisible: false,
                autocompletes: {},
                edit: false,
                education: {
                    field_of_study: '',
                    school: '',
                    gdate: '',
                },
                educationRules: {
                    field_of_study: [
                        {required: true, message: "Please input Your study field", trigger: 'change'}
                    ],
                    school: [
                        {required: true, message: "Please input Your School name", trigger: 'change'}
                    ],
                    gdate: [
                        {required: true, message: "Please select your graduation date", trigger: 'change'}
                    ]
                },
                added: [],
                formLabelWidth: '130px'
            }
        },
        watch: {
            added: function (val) {
                this.$emit('educationAdded', val);
            }

        },
        methods: {
            showEduDialog() {
                this.education = {}
                this.edit = false
                this.addEduDialogVisible = true
            },
            addEdu() {
                this.$refs['education'].validate((valid) => {
                    if (valid) {
                        this.addEduDialogVisible = false;
                        const field_of_study = this.education.field_of_study
                        const school = this.education.school
                        const gdate = this.education.gdate
                        if (this.edit === false) {
                            this.added.push({
                                field_of_study: field_of_study,
                                school: school,
                                gdate: gdate
                            })
                        }
                        else {
                            this.added[this.edit] = {
                                field_of_study: field_of_study,
                                school: school,
                                gdate: gdate,
                            }
                        }
                        this.education = {}
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            majorSearch(query, cb) {
                let majors = this.autocompletes.majors;
                let results = query ? majors.filter(this.createFilter(query)) : majors;
                let top3 = results.slice(0, 3);
                cb(top3); // number of things returned
            },
            schoolSearch(query, cb) {
                let schools = this.autocompletes.schools;
                let results = query ? schools.filter(this.createFilter(query)) : schools;
                let top3 = results.slice(0, 3);
                cb(top3); // number of things returned
            },
            createFilter(query) {
                return (item) => {
                    return item.value.toLowerCase().includes(query.toLowerCase());
                };
            },
            loadAll() {
                return {
                    majors: [
                        {"value": "Computer Engineering"},
                        {"value": "Electrical Engineering"},
                        {"value": "Computer Science"},
                        {"value": "Medicine"},
                        {"value": "Graphic Design"},
                        {"value": "Math"}
                    ],
                    schools: [
                        {"value": "University of Jordan"},
                        {"value": "Hashmite University"},
                        {"value": "University of Science and Technology"},
                        {"value": "Yarmouk University"},
                        {"value": "Mota University"},
                        {"value": "Applied Balaqaa University"}
                    ]
                };
            },
            handleSelect(item) {
                console.log(item);
            },
            editEduItem(item, index) {
                const eduItem = item
                this.education = eduItem
                this.edit = index
                this.addEduDialogVisible = true;
            },
            deleteEduItem(index) {
                if (index > -1)
                    this.$delete(this.added, index);
            }
        },
        mounted() {
            this.autocompletes = this.loadAll();
        }
    };
</script>

<style scoped>
    .list-group {
        margin-bottom: 1rem;
        position: relative;
    }

    .gdate-help {
        margin: -28px 0 0 130px;
        display: block;
        color: #aaa;
        font-size: 80%;
        font-weight: 400;
    }
</style>