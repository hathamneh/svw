<template>
    <div class="experience-item list-group-item">
        <b>{{ experienceItem.position }}</b> in <span>{{ experienceItem.organization_name }}</span>
        <br>
        <i>Worked for {{ experienceItem.period }} months</i>
        <div class="item-tools" v-if="editable">
            <a href="#" @click.prevent="$emit('expItemEdit')" class="item-edit"><i class="fa fa-edit"></i></a>
            <a href="#" @click.prevent="$emit('expItemDelete')" class="item-delete"><i class="fa fa-times"></i></a>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            experienceItem: {
                default: () => ({
                    position: '',
                    organization_name: '',
                    period: 0,
                    desc: ''
                })
            },
            editable: {
                default: () => {
                    return true;
                }
            }
        }
    }
</script>

<style scoped>
    .experience-item {
        font-size: 0.75rem;
        padding: 0.8rem;
    }
</style>