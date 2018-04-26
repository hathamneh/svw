<template>
    <div class="row">
        <div class="col-sm-8 mx-auto">
            <div class="form-group mt-2 mb-5">
                <label>Select your organization Category:</label>
                <el-select filterable placeholder="Select Category" v-model="category"
                           auto-complete="false" style="width: 100%;" @change="categoryChanged">
                    <el-option
                            v-for="cat in categories"
                            :key="cat.id"
                            :label="cat.name"
                            :value="cat.id">
                    </el-option>
                </el-select>
                <small class="form-text text-muted mt-2">
                    You should select the category that describes your organization the most and covers the main purpose of your organization.
                </small>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "org-category",
        data() {
            return {
                categories: [],
                category: this.value
            }
        },
        props: {
            value: Number
        },
        watch: {
            value: function(val) {
                this.category = val
            }
        },
        methods: {
            categoryChanged() {
                this.$emit("categoryChanged", this.category)
            },
            loadCategories() {
                axios.get("/api/categories").then( res => {
                    console.log(res.data)
                    if(res.data && Array.isArray(res.data))
                        this.categories = res.data;
                })
            }
        },
        mounted() {
            this.loadCategories()
        }
    }
</script>