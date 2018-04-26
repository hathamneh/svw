<template>
    <div class="card">
        <div class="card-header">
            <div class="d-flex align-items-center">
                <div class="settings-card-title"><i
                        class="fa fa-building"></i> {{ trans("profile.organization_type") }}
                </div>
                <button class="btn btn-secondary ml-auto" @click="saveData"
                        :disabled="!changed"><i class="fa fa-save"></i> {{ trans("common.save") }}
                </button>
            </div>
        </div>
        <div class="card-body">
            <org-category v-model="category" @categoryChanged="updateCategory"></org-category>
            <org-specialities v-model="specialities" @specialityChanged="updateSpec"></org-specialities>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CatEdit",
        data() {
            return {
                changed: false,
                category: 0,
                specialities: []
            }
        },
        props:{
            userId: Number
        },
        methods: {
            saveData() {
                const loading = this.$loading({
                    lock: true,
                });
                axios.put("/api/organization/"+this.userId ,{
                    category: this.category,
                    specialities: this.specialities
                }).then((res) => {
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
            getData() {
                axios.get('/api/organization/type')
                    .then(res => {
                        if(res.data.category)
                            this.category = res.data.category
                        if(res.data.specialities)
                            this.specialities = res.data.specialities
                    })
            },
            updateCategory(val) {
                this.changed = true
                this.category = val
            },
            updateSpec(val) {
                this.changed = true
                this.specialities = val
            }
        },
        mounted() {
            this.getData()
        }
    }
</script>