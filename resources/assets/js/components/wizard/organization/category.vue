<template>
    <div class="row">
        <div class="col-sm-8 mx-auto">
            <div class="form-group mt-2 mb-5">
                <label>Select your organization Category:</label>
                <el-select v-model="category" filterable placeholder="Select Category"
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
        name: "org-category-select",
        data() {
            return {
                category: "",
                categories: [
                    {id: 1, name: "Education"},
                    {id: 2, name: "Charity"},
                    {id: 3, name: "Culture"},
                ]
            }
        },
        methods: {
            categoryChanged() {
                this.$emit("categoryChanged", this.category)
            }
        }
    }
</script>