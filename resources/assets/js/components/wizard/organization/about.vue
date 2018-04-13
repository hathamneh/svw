<template>
    <div class="row">

        <div class="col-sm-10 offset-sm-1">
            <div class="form-group">
                <label>{{ trans("organization.name") }}:</label>
                <el-input name="name" v-model="aboutForm.name" placeholder="What is the name of your organization?"></el-input>
                <small class="form-text text-muted"><i class="fa fa-question-circle"></i> Enter your official organization name.</small>
            </div>
        </div>
        <div class="col-sm-5 offset-sm-1">
            <div class="form-group">
                <label>{{ trans("organization.foundation_date") }}:</label>
                <el-date-picker type="date" v-model="aboutForm.founded_date" format="dd/MM/yyyy" style="width: 100%;"
                                placeholder="When have you founded?">
                </el-date-picker>
            </div>
        </div>
        <div class="col-sm-5">
            <div class="form-group">
                <label>{{ trans("organization.website") }}:</label>
                <el-input v-model="aboutForm.website" placeholder="Website URL...">
                </el-input>
            </div>
        </div>
        <div class="col-sm-10 offset-sm-1">
            <div class="form-group">
                <label>{{ trans("common.about") }}:</label>
                <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 5}" v-model="aboutForm.about"
                                placeholder="Describe your organization..."></el-input>
            </div>
        </div>
        <div class="col-sm-5 offset-sm-1">
            <div class="form-group">
                <label>{{ trans("common.country") }}:</label>
                <el-select value="Select Country" v-model="aboutForm.country" filterable placeholder="Select Country"
                           auto-complete="false" style="width: 100%;">
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
                <label>{{ trans("common.city") }}:</label>
                <el-input v-model="aboutForm.city"
                          placeholder="City..."></el-input>
            </div>
        </div>
        <div class="col-sm-10 offset-sm-1">
            <div class="form-group">
                <label>{{ trans("common.address") }}:</label>
                <el-input type="textarea" :rows="2" v-model="aboutForm.address"
                          placeholder="Address of your Organization"></el-input>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "w-org-about",
        data() {
            return {
                aboutForm: {
                    name: "",
                    about: "",
                    website: "",
                    founded_date: "",
                    city: "",
                    country: "",
                    address: ""
                }
            }
        },
        props: {
            countries: Object
        },
        watch: {
            aboutForm: {
                handler(val) {
                    this.$emit("orgAboutUpdated",val)
                },
                deep: true
            }
        }
    }
</script>