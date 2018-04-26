<template>
    <div class="row">
        <div class="col-sm-8 mx-auto">
            <div class="form-group mt-2 mb-5">
                <label>What your organization cares about?</label>
                <el-select v-model="specialities" placeholder="Select Specialities"
                           auto-complete="false" style="width: 100%;" @change="specialityChanged"
                           multiple filterable allow-create default-first-option>
                    <el-option
                            v-for="speciality in loadedSpecialities"
                            :key="speciality.id"
                            :label="speciality.name"
                            :value="speciality.id">
                    </el-option>
                </el-select>
                <small class="form-text text-muted mt-2">
                    Select and add the subjects which your organization cares about so that volunteers can know what you do.
                </small>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "org-specialities",
        data() {
            return {
                specialities: this.value || [],
                loadedSpecialities: []
            }
        },
        props: {
            value: Array
        },
        watch: {
            value: function(val) {
                this.specialities = val
            }
        },
        methods: {
            specialityChanged() {
                this.$emit("specialityChanged", this.specialities)
            },
            loadSpecialities() {
                axios.get("/api/specialities").then(res => {
                    if(res.data && Array.isArray(res.data))
                        this.loadedSpecialities = res.data;
                })
            }
        },
        mounted() {
            this.loadSpecialities()
        }
    }
</script>