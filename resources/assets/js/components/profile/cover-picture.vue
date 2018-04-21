<template>
    <div class="profile-header__cover"
         :style="'background-image: url(' + imageUrl + ');'">

        <el-upload v-if="editable"
                   class="avatar-uploader"
                   name="image"
                   action="/api/upload_image/cover"
                   :headers="uploadHeaders"
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
            handleAvatarSuccess(res) {
                this.isUploading = false
                console.log(res)
                if (res.result)
                    this.imageUrl = res.url
            },
        }
    }
</script>