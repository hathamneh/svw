<template>
    <div class="card profile-edit-card">
        <div class="card-header sticky-top">
            <div class="d-flex align-items-center">
                <div class="settings-card-title"><i
                        class="fa fa-building"></i> {{ trans("profile.organization_details") }}</div>
                <button class="btn btn-secondary ml-auto" @click="saveData"
                ><i class="fa fa-save"></i> {{ trans("common.save") }}</button>
            </div>
        </div>
        <div class="card-body">
            <form action="#">
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "edit-org-details"
    }
</script>