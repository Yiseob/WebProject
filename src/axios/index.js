import axios from 'axios';

axios.interceptors.request.use(function (config) {
    // 요청이 전달되기 전에 처리
    console.log("axios.interceptor");
    return config;
}, function (error) {
    // 요청 오류에 대한 처리
    return Promise.reject(error);
});

export default axios;