<template>
    <div class="card">
        <div class="card-header sticky-top">
            <div class="d-flex align-items-center">
                <div class="settings-card-title"><i
                        class="fa fa-user-circle"></i> {{ trans("profile.personal_information") }}</div>
                <button class="btn btn-info ml-auto"><i class="fa fa-save"></i> {{ trans("common.save") }}</button>
            </div>
        </div>
        <div class="card-body">
            <form action="#">
                <label for="first_name">{{ trans("profile.full_name") }}: </label>
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                        <input type="text" class="form-control" name="first_name" id="first_name" :placeholder="trans('profile.first_name')">
                    </div>
                    <div class="col-md-6 mb-3">
                        <input type="text" class="form-control" name="last_name" id="last_name" :placeholder="trans('profile.last_name')">
                    </div>
                </div>
                <div class="form-group">
                    <label for="first_name">{{ trans("profile.field") }}</label>
                    <input type="text" class="form-control" name="first_name" id="field">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "edit-personal-info"
    }
</script>
