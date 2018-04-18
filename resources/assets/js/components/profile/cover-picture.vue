<template>
    <div class="profile-header__cover"
         style="background-image: url();">
        @if()
        <a href="#" class="btn btn-secondary btn-change-cover"><i class="fa fa-camera"></i> Change Cover</a>
        @endif
        <el-upload
                class="avatar-uploader"
                action="/api/upload_image/profile"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                :http-request="uploadImage">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            <div class="change-pp-btn"><i class="fa fa-camera fa-2x mb-1"></i> Change Picture</div>
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
                showUploadDialog: false

            }
        },
        props: {
            src: String,
            editable: Boolean
        },
        methods: {
            beforeAvatarUpload() {

            },
            handleAvatarSuccess() {

            },
            uploadImage(file) {

                let formData = new FormData();

                formData.append('image', file.file);

                axios
                    .post("/api/upload_image/profile", formData)
                    .then(response => {
                        if(response.data.result && response.data.url)
                            this.imageUrl = response.data.url

                    })
                    .catch(response => {});
            }
        }
    }
</script>