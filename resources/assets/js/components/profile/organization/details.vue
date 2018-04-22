<template>
    <div class="card profile-edit-card">
        <div class="card-header sticky-top">
            <div class="d-flex align-items-center">
                <div class="settings-card-title"><i
                        class="fa fa-building"></i> {{ trans("profile.organization_details") }}
                </div>
                <button class="btn btn-secondary ml-auto" @click="saveData"
                :disabled="!changed"><i class="fa fa-save"></i> {{ trans("common.save") }}
                </button>
            </div>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-sm-10 offset-sm-1">
                    <div class="form-group">
                        <label>{{ trans("organization.name") }}:</label>
                        <el-input name="name" v-model="organization.name" @change="changing"
                                  placeholder="What is the name of your organization?"></el-input>
                        <small class="form-text text-muted"><i class="fa fa-question-circle"></i> Enter your official
                            organization name.
                        </small>
                    </div>
                </div>
                <div class="col-sm-5 offset-sm-1">
                    <div class="form-group">
                        <label>{{ trans("organization.foundation_date") }}:</label>
                        <el-date-picker type="date" v-model="organization.founded_date" @change="changing"
                                        value-format="yyyy-MM-dd HH:mm:ss" format="dd/MM/yyyy" style="width: 100%;"
                                        placeholder="When have you founded?">
                        </el-date-picker>
                    </div>
                </div>
                <div class="col-sm-5">
                    <div class="form-group">
                        <label>{{ trans("organization.website") }}:</label>
                        <el-input type="url" v-model="organization.website" @change="changing" placeholder="Website URL...">
                        </el-input>
                    </div>
                </div>
                <div class="col-sm-10 offset-sm-1">
                    <div class="form-group">
                        <label>{{ trans("common.about") }}:</label>
                        <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 5}" v-model="organization.about"
                                  placeholder="Describe your organization..." @change="changing"></el-input>
                    </div>
                </div>
                <div class="col-sm-5 offset-sm-1">
                    <div class="form-group">
                        <label>{{ trans("common.country") }}:</label>
                        <b-form-select v-model="organization.country_code" :options="countries"
                                       :placeholder="trans('Country')" @change="changing"></b-form-select>
                    </div>
                </div>
                <div class="col-sm-5">
                    <div class="form-group">
                        <label>{{ trans("common.city") }}:</label>
                        <el-input v-model="organization.city" @change="changing"
                                  placeholder="City..."></el-input>
                    </div>
                </div>
                <div class="col-sm-10 offset-sm-1">
                    <div class="form-group">
                        <label>{{ trans("common.address") }}:</label>
                        <el-input type="textarea" :rows="2" v-model="organization.address" @change="changing"
                                  placeholder="Address of your Organization"></el-input>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "edit-org-details",
        data() {
            return {
                userId: false,
                organization: {},
                countries: [],
                changed: false
            }
        },
        props: {
            old: Object
        },
        methods: {
            loadData() {
                axios.get("/api/organization/").then((res) => {
                    this.userId = res.data.user_id
                    this.organization = res.data
                })
            },
            saveData() {
                const loading = this.$loading({
                    lock: true,
                });
                axios.put("/api/organization/"+this.userId ,this.organization).then((res) => {
                    loading.close()
                    this.$notify.success({
                        title: 'Saved!',
                        message: "Profile Updated Successfully"
                    });
                }).catch((err) => {
                    console.log(err)
                    this.$notify.error({
                        title: 'Error!',
                        message: "Profile Updating Failed"
                    });
                }).finally(()=> {
                    loading.close()
                })
            },
            changing() {
                this.changed = true
            }
        },
        mounted() {
            window.loadCountries(countries => this.countries = countries)
            this.loadData()
        }
    }
</script>