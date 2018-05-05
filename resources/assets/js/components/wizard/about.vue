<template>
    <el-form :model="aboutForm" :rules="rules" ref="ruleForm">
        <div class="row">

            <div class="col-sm-5 offset-sm-1">
                <div class="form-group">
                    <label>First Name:</label>
                    <el-form-item prop="first_name">
                        <el-input name="first_name" v-model="aboutForm.first_name" placeholder="First Name"></el-input>
                    </el-form-item>
                </div>
            </div>
            <div class="col-sm-5">
                <div class="form-group">
                    <label>Last Name:</label>
                    <el-form-item prop="last_name">
                        <el-input name="last_name" v-model="aboutForm.last_name" placeholder="Last Name"></el-input>
                    </el-form-item>
                </div>

            </div>
            <div class="col-sm-5 offset-sm-1">
                <div class="form-group">
                    <label class="control-label">Birthday
                        <small>(required)</small>
                    </label>
                    <el-form-item prop="birthday">
                        <el-date-picker type="date" v-model="aboutForm.birthday" format="dd/MM/yyyy"
                                        placeholder="Birthday" :default-value="new Date('2000-01-01')">
                        </el-date-picker>
                    </el-form-item>
                </div>
            </div>
            <div class="col-sm-5">
                <div class="form-group">
                    <label class="control-label">Gender
                        <small>(required)</small>
                    </label>

                    <div class="btn-group btn-group-toggle">
                        <el-form-item prop="gender">
                            <el-radio-group v-model="aboutForm.gender">
                                <el-radio label="male" border>Male</el-radio>
                                <el-radio label="female" border>Female</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </div>
                </div>
            </div>
            <div class="col-sm-5 offset-sm-1">
                <div class="form-group">
                    <label class="control-label">Country
                        <small>(required)</small>
                    </label>

                    <el-form-item prop="country">
                        <el-select value="Select Country" v-model="aboutForm.country" filterable
                                   placeholder="Select Country"
                                   auto-complete="false">
                            <el-option
                                    v-for="(country, code) in countries"
                                    :key="country"
                                    :label="country"
                                    :value="code">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </div>
            </div>
            <div class="col-sm-5">
                <div class="form-group">
                    <label class="control-label">City</label>
                    <el-input name="city" id="city" v-model="aboutForm.city" placeholder="City Name"></el-input>
                </div>
            </div>
            <div class="col-sm-5 offset-sm-1">
                <div class="form-group">
                    <label for="phone" class="control-label">Phone Number</label>
                    <el-input name="phone" v-model="aboutForm.phone" placeholder="Phone Number"></el-input>
                </div>
            </div>
            <div class="col-sm-10 offset-sm-1">
                <div class="form-group">
                    <label class="control-label">Bio</label>
                    <el-input type="textarea" v-model="aboutForm.bio" placeholder="Tell more..."></el-input>
                </div>
            </div>
        </div>
    </el-form>
</template>

<script>

    export default {
        props: {
            old: Object,
            countries: Object,
            errors: Array
        },
        data() {
            return {
                aboutForm: this.old,
                user_avatar: this.default_avatar,
                errorsData: this.errors,
                rules: {
                    first_name: [
                        {required: true, message: 'First name is required', trigger: 'blur'},
                    ],
                    last_name: [
                        {required: true, message: 'Last name is required', trigger: 'blur'},
                    ],
                    country: [
                        {required: true, message: 'Please select your country', trigger: 'change'}
                    ],
                    birthday: [
                        {type: 'date', required: true, message: 'Please pick a date', trigger: 'change'}
                    ],
                    gender: [
                        {required: true, message: 'Please select your gender', trigger: 'change'}
                    ],
                }
            };
        },
        watch: {
            aboutForm: function (val, oldVal) {
                this.$emit("aboutUpdated", val)
            },
            errors: function (val, old) {
                this.errorsData = this.errors
            }
        },
        methods: {
            validateForm() {
                let out = false;
                this.$refs['ruleForm'].validate((valid) => {
                    out = valid;
                });
                return out;
            }
        }
    }
</script>