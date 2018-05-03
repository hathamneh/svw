<template>
    <ul class="events-list">
        <event-item v-for="event in events" :key="event.id" :event-data="event" :id="'event-' + event.id"
            size="normal"></event-item>
    </ul>
</template>

<script>
    export default {
        name: "eventList",
        components: {
            EventItem: () => import('./eventItem')
        },
        data() {
            return {
                events: []
            }
        },
        props: {
            userId: Number,
            eventsList: Array,
            feed: {
                type: Boolean,
                default: false
            },
            count: Number,
            size: {
                type: String,
                default: "normal"
            }
        },
        methods: {
            loadEvents() {
                let url = '/api/organization/events'
                if(this.feed)
                    url = '/api/feed/events'
                else if(this.userId)
                    url = '/api/organization/'+this.userId+'/events'
                if(this.count)
                    url += "?count=" + this.count
                axios.get(url)
                    .then(res => {
                        if(res.data && Array.isArray(res.data))
                            this.events = res.data
                    })
            }
        },
        mounted() {
            this.loadEvents()
        }
    }
</script>
