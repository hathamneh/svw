<template>
    <div class="row">

        <div class="col-sm-5 offset-sm-1">
            <div class="form-group">
                <label>First Name:</label>
                <el-input name="first_name" v-model="aboutForm.first_name" placeholder="First Name"></el-input>
            </div>
        </div>
        <div class="col-sm-5">
            <div class="form-group">
                <label>Last Name:</label>
                <el-input name="first_name" v-model="aboutForm.last_name" placeholder="Last Name"></el-input>
            </div>
        </div>
        <div class="col-sm-5 offset-sm-1">
            <div class="form-group">
                <label class="control-label">Birthday
                    <small>(required)</small>
                </label>
                <el-date-picker type="date" v-model="aboutForm.birthday" format="dd/MM/yyyy"
                                placeholder="Birthday" :default-value="new Date('2000-01-01')">
                </el-date-picker>

            </div>
        </div>
        <div class="col-sm-5">
            <div class="form-group">
                <label class="control-label">Gender
                    <small>(required)</small>
                </label>

                <div class="btn-group btn-group-toggle">
                    <el-radio-group v-model="aboutForm.gender">
                        <el-radio label="male" border>Male</el-radio>
                        <el-radio label="female" border>Female</el-radio>
                    </el-radio-group>
                </div>
            </div>
        </div>
        <div class="col-sm-5 offset-sm-1">
            <div class="form-group">
                <label for="country" class="control-label">Country
                    <small>(required)</small>
                </label>

                <el-select value="Select Country" v-model="aboutForm.country" filterable placeholder="Select Country" auto-complete="false">
                    <el-option
                            v-for="(country, code) in countries"
                            :key="country"
                            :label="country"
                            :value="code">
                    </el-option>
                </el-select>
            </div>
        </div>
        <div class="col-sm-5">
            <div class="form-group">
                <label class="control-label">City
                    <small>(required)</small>
                </label>
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
</template>

<script>

    export default {
        props: {
            old: Object,
            countries: Object,
        },
        mounted() {
        },
        data() {
            return {
                aboutForm: this.old,
                user_avatar: this.default_avatar
            };
        },
        watch: {
            aboutForm: function (val, oldVal) {
                this.$emit("aboutUpdated",val)
            }
        }
    }
</script>