<template>
    <div>
        <ul v-if="results.length" class="row">
            <li v-for="result in results"
                :class="['search-results__item', 'col-sm-6', type === 'event' ? 'event-result':'']">
                <template v-if="type === 'event'">
                    <a :href="'/event/'+result.id" class="card">
                        <div class="card-body">
                            <div class="d-flex flex-column">
                                <div class="item-image">
                                    <img :src="result.picture" alt="">
                                </div>
                                <div class="item-content">
                                    <h3>{{ result.name }}</h3>
                                    <p class="text-muted">
                                        {{ trans("By") }}
                                        : {{ result.organization.name }}
                                        <br>
                                        {{ trans("When") }}: {{ result.date_range }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </template>
                <template v-else>
                    <a :href="'/'+type+'/'+result.user.username" class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-3 item-image">
                                    <img :src="result.user.profile_picture"
                                         alt="">
                                </div>
                                <div class="col-sm-9 item-content">
                                    <h3>{{ result.first_name + " " + result.last_name }}</h3>
                                    <p class="text-muted">@{{ result.user.username }}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </template>
            </li>
        </ul>
        <normal-message v-else class="mt-4">{{ trans("No Results") }}</normal-message>
    </div>
</template>

<script>
    export default {
        name: "searchResults",
        props: {
            results: Array,
            type: String
        }
    }
</script>
