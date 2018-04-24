const IsEditable = {
    install(Vue, options) {
        Vue.prototype.$editable = function (id, callback) {
            let editable = false;
            window.currentUser().then(res => {
                editable = res.data.id === id
                callback(editable)
            })
        }
    }
}

export default IsEditable