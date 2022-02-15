import axios from 'axios';

const BASE_URL = 'http://45.79.170.253:8080/';

const apiInstance = axios.create({ baseURL: BASE_URL});

const token = '';

apiInstance.interceptors.request.use((request) => {
    request.headers.Authorization = 'Bearer ' + token;
    return request;
}, (error) => error);

apiInstance.interceptors.response.use((response) => {
    return response
}, (error) => {
    return Promise.reject(error.response.data);
});

export default apiInstance;