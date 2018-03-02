<template>
    <div class="education-item list-group-item list-group-item-action">
        <b>{{ educationItem.field_of_study }}</b> | <span>{{ educationItem.school }}</span>
        <br>
        <i>Graduation date: {{ educationItem.gdate }}</i>
        <div class="item-tools">
            <a href="#" @click.prevent="$emit('eduItemEdit')" class="item-edit"><i class="fa fa-pencil"></i></a>
            <a href="#" @click.prevent="$emit('eduItemDelete')" class="item-delete"><i class="fa fa-times"></i></a>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            educationItem: {
                default: () => ({
                    major: '',
                    school: '',
                    gdate: ''
                })
            },
        }
    }
</script>

<style scoped>
    .education-item {
        font-size: 0.75rem;
        padding: 0.8rem;
    }
</style>