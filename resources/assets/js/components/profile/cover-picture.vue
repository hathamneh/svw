<template>
    <div class="profile-header__cover"
         :style="'background-image: url(' + imageUrl + ');'">

        <el-upload v-if="editable"
                   class="avatar-uploader"
                   action="/api/upload_image/cover"
                   :show-file-list="false"
                   :on-success="handleAvatarSuccess"
                   :before-upload="beforeAvatarUpload"
                   :http-request="uploadImage"
                   v-loading="isUploading"
                   element-loading-text="Uploading..."
                   element-loading-spinner="el-icon-loading"
                   element-loading-background="rgba(0, 0, 0, 0.8)">
            <a href="#" class="btn btn-secondary btn-change-cover"><i class="fa fa-camera"></i> Change Cover</a>
        </el-upload>
        <!--<img :src="imageUrl">-->
    </div>
</template>

<script>
    export default {
        name: "cover-picture",
        data() {
            return {
                imageUrl: this.src,
                showUploadDialog: false,
                isUploading: false
            }
        },
        props: {
            src: String,
            editable: Boolean
        },
        methods: {
            beforeAvatarUpload() {
                this.isUploading = true
            },
            handleAvatarSuccess() {
                this.isUploading = false
            },
            uploadImage(file) {

                let formData = new FormData();

                formData.append('image', file.file);

                axios
                    .post("/api/upload_image/cover", formData)
                    .then(response => {
                        if (response.data.result && response.data.url)
                            this.imageUrl = response.data.url

                    })
                    .catch(response => {
                    }).finally(() => this.isUploading = false)
            }
        }
    }
</script>