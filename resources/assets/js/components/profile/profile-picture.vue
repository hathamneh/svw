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
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isPNG = file.type === 'image/png';
                const isLt5M = file.size / 1024 / 1024 < 10;
                let allowed = true
                let message = []
                if (!isJPG && !isPNG) {
                    allowed = false
                    message.push('Avatar picture must be JPG or PNG format!')
                }
                if (!isLt5M) {
                    allowed = false
                    message.push('Avatar picture size can not exceed 5MB!');
                }
                if (allowed) {
                    this.isUploading = true
                }
                if (message.length) {
                    this.$notify.error({
                        title: 'Error',
                        dangerouslyUseHTMLString: true,
                        message: "<ul><li>" + message.join("</li><li>") + "</li></ul>"
                    });
                }
                return allowed
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