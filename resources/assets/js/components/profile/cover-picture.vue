<template>
    <div class="profile-header__cover"
         :style="'background-image: url(' + imageUrl + ');'">

        <el-upload v-if="editable"
                   class="avatar-uploader"
                   action="/api/upload_image/cover"
                   :show-file-list="false"
                   :on-success="handleAvatarSuccess"
                   :before-upload="beforeAvatarUpload"
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
                isUploading: false,
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
        }
    }
</script>