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
            <org-category v-model="category" @categoryChanged="val => {this.category = val}"></org-category>
            <org-specialities :cat-data="specialities" @specialityChanged="val => {this.specialities = val}"></org-specialities>
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
        methods: {
            saveData() {

            },
            getData() {
                axios.get('/api/organization/type')
                    .then(res => {
                        if(res.data.category)
                            this.category = res.data.category.id
                        if(res.data.specialities)
                            this.specialities = res.data.specialities
                    })
            }
        },
        mounted() {
            this.getData()
        }
    }
</script>