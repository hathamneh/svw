window.currentUser = function() {
    return axios.get('/api/user')
}