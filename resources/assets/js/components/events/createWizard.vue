<template>

    <b-form @submit.prevent="submitForm" method="POST">
        <div class="row">
            <div class="col-sm-8">
                <b-form-group description="Make it short and clear, so volunteers can easily find it.">
                    <b-form-input v-model="event.name"
                                  class="event-name-input"
                                  required
                                  size="lg"
                                  placeholder="Your Event Name"
                                  autofocus>
                    </b-form-input>
                </b-form-group>
                <b-form-group label="Description">
                    <b-form-textarea v-model="event.description"
                                     placeholder="Talk about your event"
                                     :rows="3"
                                     :max-rows="6">
                    </b-form-textarea>
                </b-form-group>
                <b-form-group label="Date">
                    <el-date-picker
                            style="width: 100%;"
                            v-model="event.dateRange"
                            type="daterange"
                            range-separator="To"
                            start-placeholder="Start date"
                            end-placeholder="End date"
                            format="dd/MM/yyyy" value-format="yyyy-MM-dd HH:mm:ss">
                    </el-date-picker>
                </b-form-group>
                <b-form-group :label="trans('Location')">
                    <b-form-text class="mt-0 mb-2">{{ trans('Where your event is located?') }}</b-form-text>
                    <b-form-row class="mb-2">
                        <b-col>
                            <b-form-select v-model="event.country" :options="countryList"
                                           :placeholder="trans('Country')"></b-form-select>
                        </b-col>
                        <b-col>
                            <b-form-input v-model="event.city"
                                          :placeholder="trans('City')">
                            </b-form-input>
                        </b-col>
                    </b-form-row>
                    <b-form-textarea v-model="event.address"
                                     :placeholder="trans('Enter the Address of the event')"
                                     :rows="2"
                                     :max-rows="2">
                    </b-form-textarea>

                </b-form-group>
            </div>
            <div class="col-sm-4">
                <el-upload
                        class="event-picture-uploader"
                        action=""
                        :show-file-list="false"
                        :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl != null" :src="imageUrl" class="event-picture">
                    <div v-else class="event-picture-uploader-icon">
                        <i class="el-icon-plus"></i>
                        <span>{{ trans('Choose your event Picture') }}</span>
                    </div>
                </el-upload>
                <hr class="my-4">
                <b-form-group>
                    <b-button type="submit" size="lg" variant="secondary">
                        {{ trans('Save Event') }}
                    </b-button>
                </b-form-group>
            </div>
        </div>
    </b-form>
</template>

<script>
    export default {
        name: "create-event-wizard",
        data() {
            return {
                active: 0,
                imageUrl: null,
                event: {
                    name: '',
                    description: '',
                    dateRange: [],
                    country: null,
                    city: '',
                    address: '',
                    picture: null,
                },
                countryList: [
                    {value: null, text: 'Select Country', disabled: true}
                ],
            }
        },
        methods: {
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isPNG = file.type === 'image/png';
                const isLt5M = file.size / 1024 / 1024 < 5;

                if (!isJPG && !isPNG) {
                    this.$message.error('Avatar picture must be JPG or PNG format!');
                }
                if (!isLt5M) {
                    this.$message.error('Avatar picture size can not exceed 5MB!');
                }
                if ((isJPG || isPNG) && isLt5M) {
                    this.imageUrl = URL.createObjectURL(file)
                    this.event.picture = file
                }

                return false
            },
            submitForm() {
                const loading = this.$loading({
                    lock: true,
                });

                let formData = new FormData()

                formData.append('name', this.event.name)
                formData.append('description', this.event.description)
                formData.append('date_from', this.event.dateRange[0])
                formData.append('date_to', this.event.dateRange[1])
                formData.append('country', this.event.country)
                formData.append('city', this.event.city)
                formData.append('address', this.event.address)
                formData.append('picture', this.event.picture)

                console.log(formData)
                this.$http
                    .post("/api/event", formData)
                    .then(res => {
                        if (res.data && res.data.url)
                            window.location.href = res.data.url
                    })
                    .catch(response => {
                    })
                    .finally(() => {
                        loading.close()
                    });
            }
        },
        created() {
        }
    }
</script>
