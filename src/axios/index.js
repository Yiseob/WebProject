import axios from 'axios'
import createStore from "../store";


let isTokenRefreshing = false;




// axios.interceptors.request.use(function (config) {
//     // 요청이 전달되기 전에 작업 수행
//     console.log(config)
//     return config;
// }, function (error) {
//     // 요청 오류가 있는 작업 수행
//     return Promise.reject(error);
// });

// 응답 인터셉터 추가하기
// axios.interceptors.response.use(function (response) {

//     return response;
// }, function (error) {
//     if (error.response) {
//         if (error.response.status === 401 && error.response.data.errorCode === "A-001") {
//             if (!isTokenRefreshing) {
//                 isTokenRefreshing = true;
//                 let refreshToken = createStore.state.refresh
//                 let url = "http://3.34.149.238:8080";
//                 let config = {
//                     headers: {
//                         Authorization: "Bearer " + refreshToken,
//                     },
//                 };
//                 console.log(config);
//                 axios
//                     .post(url + "/api/access-token/issue", config)
//                     .then((res) => {
//                         let token = res.data.accessToken
//                         createStore.dispatch("setToken", token);
//                         isTokenRefreshing = false;
//                         console.log("토큰이 갱신되었습니다")
//                     }).catch((err) => {
//                         console.log(err)
//                         console.log("토큰 갱신에 실패하였습니다")
//                     })
//             }
//         }
//     }
//     return Promise.reject(error);
// });

export default axios;