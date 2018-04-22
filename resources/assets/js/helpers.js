window.loadCountries = function(callback) {
    axios.get('/api/countries/keyValue')
        .then((res) => {
            if(res.data) {
                callback(res.data)
            }
        }).catch((res) => console.error(res))
}