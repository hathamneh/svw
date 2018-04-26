<template>
    <div class="list-group Event__details">
        <div class="list-group-item">
            <b><i class="far fa-clock mr-2"></i>{{ trans('When: ') }}</b> {{ event.date_range }}
        </div>
        <div class="list-group-item">
            <b><i class="fa fa-map-marker-alt mr-2"></i>{{ trans('Location: ') }}</b> {{ event.city + ', ' + event.country }}
        </div>
        <div class="list-group-item">
            <b><i class="fa fa-map-pin mr-2"></i>{{ trans('Address: ') }}</b> {{ event.address }}
        </div>
        <div class="list-group-item">
            <b><i class="far fa-file-alt mr-2"></i>{{ trans('Description: ') }}</b> {{ event.description }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "eventDetails",
        props: {
            event: Object
        }
    }
</script>