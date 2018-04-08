<template>
    <el-row :gutter="4">
        <el-col :span="16" v-if="editable">
            {{ message }}
        </el-col>
        <el-col :span="8" v-if="editable">
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
            <div class="list-group mt-2" v-if="values.length || oldItems.length">
                <div class="list-group-item d-flex" v-for="(value, index) in oldItems" :key="index">
                    <div v-for="item in type.modal" class="mr-1 small">
                        <b>{{ item.label }}</b>: {{ value[item.name] }}
                    </div>
                    <div class="ml-auto" v-if="editable">
                        <a href="#" type="text" class="text-danger" title="Delete"
                           @click.prevent="deleteOldItem(index,value.id)"><i class="fa fa-times"></i></a>
                    </div>
                </div>

                <div class="list-group-item d-flex" v-for="(value, index) in values" :key="index">
                    <div v-for="item in type.modal" class="mr-1 small">
                        <b>{{ item.label }}</b>: {{ value.value[item.name] }}
                    </div>
                    <div class="ml-auto" v-if="editable">
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
                inputPlaceholder: "Enter " + this.capitalizeFirstLetter(this.type.name) + " name",
                values: [],
                toAdd: {},
                modalVisible: false,
                modalTitle: "New " + this.capitalizeFirstLetter(this.type.name)
            };
        },
        props: {
            message: String,
            type: Object,
            editable: {
                type: Boolean,
                default: () => false
            },
            oldItems: {
                type: Array,
            }
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
            },
            deleteOldItem(index, id) {
                this.$emit('deleteCapItem', id)
                $delete(this.oldItems, index)
            }
        }
    }
</script>