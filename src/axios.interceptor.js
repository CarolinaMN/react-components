import axios from 'axios';

const BASE_URL = 'http://localhost:5000/';

const apiInstance = axios.create({ baseURL: BASE_URL});


apiInstance.interceptors.request.use((request) => {
    var token = localStorage.getItem('token-react');
    request.headers.Authorization = 'Bearer ' + token;
    return request;
}, (error) => error);

apiInstance.interceptors.response.use((response) => {
    return response
}, (error) => {
    return Promise.reject(error.response.data);
});

export default apiInstance;