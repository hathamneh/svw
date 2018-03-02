<template>
    <el-row :gutter="4">
        <el-col :span="16">
            {{ message }}
        </el-col>
        <el-col :span="8">
            <el-dialog
                    width="30%"
                    :title="modalTitle"
                    :visible.sync="modalVisible"
                    append-to-body>
                <div v-for="item in type.modal" class="form-group">
                    <label>{{ item.label }}:</label>
                    <el-input v-model="toAdd[item.name]" :placeholder="item.placeholder"
                              :type="item.type ? item.type : 'text'"></el-input>
                </div>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="modalVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="addValue">Add</el-button>
                </div>
            </el-dialog>
            <el-button style="width: 100%;" type="primary" @click="modalVisible = true" plain icon="el-icon-plus">
                Add {{ capitalizeFirstLetter(type.name) }}
            </el-button>
        </el-col>
        <el-col :span="24">
            <div class="list-group mt-2" v-if="values.length">
                <div class="list-group-item d-flex" v-for="(value, index) in values" :key="index">
                    <div v-for="item in type.modal" class="mr-1 small">
                        <b>{{ item.label }}</b>: {{ value.value[item.name] }}
                    </div>
                    <div class="ml-auto">
                        <a href="#" type="text" class="text-danger" title="Delete"
                                   @click.prevent="$delete(values, index)"><i class="fa fa-times"></i></a>
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
                inputPlaceholder: "Enter "+this.capitalizeFirstLetter(this.type.name)+" name",
                values: [],
                toAdd: {},
                modalVisible: false,
                modalTitle: "New " + this.capitalizeFirstLetter(this.type.name)
            };
        },
        props: {
            message: String,
            type: Object,
        },
        methods: {
            addValue() {
                let tmp = {};
                tmp.type = this.type.name;
                tmp.value = this.toAdd;
                this.$emit("capabilitiesUpdated", tmp);
                this.values.push(tmp);
                this.toAdd = {};
                this.modalVisible = false;
            },
            capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }
        }
    }
</script>