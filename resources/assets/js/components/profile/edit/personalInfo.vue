<template>
    <div class="card profile-edit-card">
        <div class="card-header sticky-top">
            <div class="d-flex align-items-center">
                <div class="settings-card-title"><i
                        class="fa fa-user-circle"></i> {{ trans("profile.personal_information") }}</div>
                <button class="btn btn-secondary ml-auto" @click="saveData"
                    ><i class="fa fa-save"></i> {{ trans("common.save") }}</button>
            </div>
        </div>
        <div class="card-body">
            <form action="#">
                <label for="first_name">{{ trans("profile.name") }}: </label>
                <div class="form-row mb-3" >
                    <div class="col-md-6">
                        <input type="text" class="form-control" v-model="pinfo.first_name" id="first_name" :placeholder="trans('profile.first_name')">
                    </div>
                    <div class="col-md-6">
                        <input type="text" class="form-control" v-model="pinfo.last_name" id="last_name" :placeholder="trans('profile.last_name')">
                    </div>
                </div>
                <div class="form-group">
                    <label>{{ trans("profile.birthday") }}</label>
                    <el-date-picker type="date" v-model="pinfo.birthday" value-format="dd/MM/yyyy" style="width: 100%;"
                                    :placeholder="trans('profile.birthday')" :default-value="new Date('2000-01-01')">
                    </el-date-picker>
                </div>
                    <div class="form-row mb-3">
                        <div class="col-md-6">
                            <label class="control-label">{{ trans('profile.country') }}</label>
                            <el-select value="Select Country" v-model="pinfo.country" filterable :placeholder="trans('profile.country')" auto-complete="false">
                                <el-option
                                        v-for="(country, code) in countries"
                                        :key="country"
                                        :label="country"
                                        :value="code">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="col-md-6">
                                <label>{{ trans('profile.city') }}</label>
                                <el-input name="city" id="city" v-model="pinfo.city" :placeholder="trans('profile.city')"></el-input>
                        </div>
                    </div>
                <div class="form-group">
                    <label>{{ trans('profile.phone_number') }}</label>
                    <el-input name="phone" v-model="pinfo.phone" :placeholder="trans('profile.phone_number')"></el-input>
                </div>
                <div class="form-group">
                    <label>{{ trans('profile.bio') }}</label>
                    <el-input name="bio" v-model="pinfo.bio" :placeholder="trans('profile.bio')" type="textarea"></el-input>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "edit-personal-info",
        data() {
            return {
                userId: 0,
                pinfo: {
                    first_name: "",
                    last_name: "",
                    birthday: "",
                    country: "",
                    city: "",
                    phone: "",
                    bio: ""
                },
                countries: {}
            };
        },
        methods: {
            loadData() {
                axios.get("/api/volunteer/").then((res) => {
                    console.log(res.data);
                    this.userId = res.data.user_id
                    this.pinfo.first_name = res.data.first_name
                    this.pinfo.last_name = res.data.last_name
                    this.pinfo.birthday = res.data.birthday
                    this.pinfo.country = res.data.country
                    this.pinfo.city = res.data.city
                    this.pinfo.phone = res.data.phone
                    this.pinfo.bio = res.data.bio
                })
            },
            saveData() {
                const loading = this.$loading({
                    lock: true,
                });
                axios.put("/api/volunteer/"+this.userId+"/profile" ,this.pinfo).then((res) => {
                    console.log(res.data)
                    loading.close()
                }).catch((err) => {
                    console.error(err)
                    loading.close()
                }).finally(()=> {
                    loading.close()
                })
            }
        },
        created() {
            this.loadData()
        }
    }
</script>
