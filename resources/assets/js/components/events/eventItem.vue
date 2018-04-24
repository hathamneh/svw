<template>
    <li class="events-list__item">
        <a :href="event.url" class="card">
            <div class="card-body">
                <div class="d-flex flex-column">
                    <div class="item-image">
                        <img :src="event.picture" alt="">
                    </div>
                    <div class="item-content">
                        <div class="item-content__text">
                            <h3>{{ event.name }}</h3>
                            <p class="text-muted">
                                {{ trans("By") }}: {{ event.organization }}
                                <br>
                                {{ trans("When") }}: {{ event.date_range }}
                            </p>
                        </div>
                        <div class="item-content__subscribers">
                            <div class="subscribers-number">{{ event.subscribers }}</div>
                            <div class="subscribers-text">{{ trans("Going") }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
</template>

<script>
    export default {
        name: "eventItem",
        data() {
            return {
                event: {},
            }
        },
        props: {
            eventData: Object,
            eventId: Number
        },
        mounted() {
            if (this.eventId)
                axios.get("/api/event/" + this.eventId)
                    .then((res) => {
                        this.event = res.data
                    })
            else {
                this.event = this.eventData
            }
        }
    }
</script>
