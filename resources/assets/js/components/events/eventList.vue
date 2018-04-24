<template>
    <ul class="events-list">
        <event-item v-for="event in events" :key="event.id" :event-data="event"></event-item>
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
            }
        },
        methods: {
            loadEvents() {
                if(this.feed)
                    url = '/api/feed/events'
                else if(this.userId)
                    url = '/api/user/'+this.userId+'/events'
                else
                    url = '/api/user/events'
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
