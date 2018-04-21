<template>
    <div class="profile-picture">
        <el-upload v-if="editable"
                   class="avatar-uploader"
                   action="/api/upload_image/profile"
                   :headers="uploadHeaders"
                   :show-file-list="false"
                   :on-success="handleAvatarSuccess"
                   :before-upload="beforeAvatarUpload"
                   name="image"
                   v-loading="isUploading"
                   element-loading-text="Uploading..."
                   element-loading-spinner="el-icon-loading"
                   element-loading-background="rgba(0, 0, 0, 0.8)">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            <div class="change-pp-btn"><i class="fa fa-camera fa-2x mb-1"></i> Change Picture</div>
        </el-upload>
        <img v-else-if="imageUrl" :src="imageUrl" class="avatar">
    </div>
</template>

<script>
    export default {
        name: "profile-picture",
        data() {
            return {
                imageUrl: this.src,
                showUploadDialog: false,
                isUploading: false,
                uploadHeaders: window.intReqHeaders
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
            handleAvatarSuccess(res, file) {
                this.isUploading = false
                console.log(res)
                if (res.result)
                    this.imageUrl = res.url
            },

        }
    }
</script>