import axios from 'axios';

// add authorization token to the request headers
export function setTokenHeader(token){
    if(token){
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
}

// with a succesful request we always get back on object data
// with an unsuccesful request we get back an object called data.error
export function apiCall(method, path, data){
    return new Promise((resolve, reject) => {
        return axios[method](path, data)
        .then(res => {
            return resolve(res.data);
        })
        .catch(error => {
            return reject(error.response.data.error);
        })
    })
}