var edexMixin = {
    data() {
        return {
            addDialogVisible: false,
            edit: false,
            added: [],
            formLabelWidth: '130px',
            currentUser: false,
            editable: false
        }
    },
    props: {
        isProfile: {
            type: Boolean,
            default: () => (false)
        },
        user_id: {
            type: Number,
            default: () => (0)
        }
    },
    methods: {
        showDialog() {
            this.edit = false
            this.addEduDialogVisible = true
        }
    }
}

