<template>
    <div class="card Event-tools">
        <div class="card-body Event-tools__content">
            <div class="tools-left">
                <button v-if="!isGoing" class="btn btn-secondary" @click="goingEvent">
                    <i class="icon-going"></i>Going
                </button>
                <button v-if="isGoing" :class="btnClasses" @click="leaveEvent"
                        @mouseenter="btnMouseEnter" @mouseleave="btnMouseLeave">
                    <template v-if="btnHovered">
                        <i class="icon-leave-event"></i>{{ trans("Not Going") }}
                    </template>
                    <template v-else>
                        <i class="icon-is-going"></i>{{ trans("You are going") }}
                    </template>
                </button>
                <a :href="editLink" v-if="editable" class="btn btn-light">
                    <i class="fa fa-edit mr-2"></i>{{ trans('Edit Event') }}
                </a>
            </div>
            <div class="tools-right">
                <div class="tools-item event-subscribers">
                    <div class="event-subscribers__number">{{ subscribers }}</div>
                    <div class="event-subscribers__text">{{ trans('Going') }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "eventTools",
        data() {
            return {
                isGoing: false,
                subscribers: 0,
                btnHovered: false,
                btnClasses: ['btn', 'btn-success', ''],
                editable: true,
                editLink: "/event/"+this.eventId+"/edit"
            }
        },
        props: {
            eventId: Number
        },
        methods: {
            getData() {
                axios.get('/api/event/' + this.eventId + '/status')
                    .then(res => {
                        if (res.data.going)
                            this.isGoing = res.data.going
                        if (res.data.subscribers)
                            this.subscribers = res.data.subscribers
                    })
            },
            btnMouseEnter() {
                this.btnHovered = true
                this.btnClasses = ['btn', 'btn-danger']
            },
            btnMouseLeave() {
                this.btnHovered = false
                this.btnClasses = ['btn', 'btn-success']
            },
            leaveEvent() {
                axios.post('/api/event/'+this.eventId+'/leave')
                    .then(res => {
                        if(res.data.success) {
                            this.subscribers = res.data.subscribers
                            this.isGoing = false
                        }
                    })
            },
            goingEvent() {
                axios.post('/api/event/'+this.eventId+'/going')
                    .then(res => {
                        if(res.data.success) {
                            this.subscribers = res.data.subscribers
                            this.isGoing = true
                        }
                    })
            }
        },
        mounted() {
            this.getData()
        }
    }
</script>
