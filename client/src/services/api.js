import axios from 'axios';

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