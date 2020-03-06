import axios from 'axios'

const api_key = 'e4208d5c'
const url = 'http://www.omdbapi.com/?apikey='+ api_key +'&'

export default {
    getRequest (parameter = null) {
        return axios.get(url + parameter)
        .then(response => {
            return response.data
        })
        .catch(e => {
            // Capturamos los errores
        })
    }
}