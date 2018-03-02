<template>
    <el-row :gutter="4">
        <el-col :span="18">
            {{ message }}
        </el-col>
        <el-col :span="6">
            <el-dialog
                    width="30%"
                    title="Inner Dialog"
                    :visible.sync="modalVisible"
                    append-to-body>
                <label>Course Name:</label>
                <el-input v-model="course.name" placeholder="Enter Course Name"></el-input>
                <label>Given by:</label>
                <el-input v-model="course.from" placeholder="Who has give you the course?"></el-input>

                <div slot="footer" class="dialog-footer">
                    <el-button @click="modalVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="addValue">Add</el-button>
                </div>
            </el-dialog>
            <el-button style="width: 100%;" type="primary" @click="modalVisible = true" plain icon="el-icon-plus">
                Add Course
            </el-button>
        </el-col>
        <el-col :span="24">
            <div class="list-group mt-2" v-if="values.length">
                <div class="list-group-item d-flex" v-for="(value, index) in values" :key="index">
                    <div>{{ value.name }}
                        <small>from {{ value.from }}</small>
                    </div>
                    <div class="ml-auto">
                        <el-button icon="el-icon-close" type="danger" size="mini" plain title="Delete"
                                   @click="$delete(values, index)"></el-button>
                    </div>
                </div>
            </div>

        </el-col>
    </el-row>
</template>

<script>
    export default {
        data() {
            return {
                inputPlaceholder: "Enter Course name",
                values: [],
                course: {
                    name: "",
                    "from": ""
                },
                modalVisible: false
            };
        },
        props: {
            message: String
        },
        methods: {
            addValue() {

                this.values.push(this.course);
                this.course = {
                    name: "",
                    "from": ""
                }
                this.modalVisible = false
            },
            capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }
        }
    }
</script>