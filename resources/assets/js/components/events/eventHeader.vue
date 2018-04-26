<template>
    <div class="Event__header">
        <div class="Event__image" :style="imgStyle">
            <div class="Event__image__overlay"></div>
        </div>
        <div class="Event__top-text">
            <h3 class="Event__name">{{ eventData.name }}</h3>
            <div class="Event__sub-text">
                {{ trans("By: ") + eventData.orgName }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "eventHeader",
        data() {
            return {
                imgStyle: {
                    backgroundImage: 'url(' + this.eventData.picture + ')'
                }
            }
        },
        props: {
            eventData: Object
        }
    }
</script>