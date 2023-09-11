import axios from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('accessToken');
export const instance = axios.create({
    baseURL: 'http://localhost:3001/',
    headers: {
        Authorization: `Bearer ${token}`,
    },
});
// Add a response interceptor
instance.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    },
);
