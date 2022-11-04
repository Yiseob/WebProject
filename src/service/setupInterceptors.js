import { store } from "../store"
import instance from "./api"


let isTokenRefreshing = false;
let refreshSubscribers = [];

const onTokenRefreshed = () => {
    refreshSubscribers.map((callback) => callback());
};

const addRefreshSubscriber = (callback) => {
    refreshSubscribers.push(callback);
};

export function setInterceptors(instance) {
    instance.interceptors.request.use(
        function (config) {
            store.commit('setLoading', true);
            const token = store.state.token
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            return config;
        },
        function (error) {
            store.commit('setLoading', false);
            return Promise.reject(error);
        },

        instance.interceptors.response.use(
            (res) => {
                return res;
            },
            async (err) => {
                const originalConfig = err.config;


                if (err.response.status === 401 && err.data.errorCode === "A-001") {
                    const retryOrigReq = new Promise((resolve) => {
                        addRefreshSubscriber(() => {
                            resolve(instance(originalConfig));
                        });
                    });

                    if (!isTokenRefreshing) {
                        isTokenRefreshing = true;
                        const refresh = store.state.refresh;
                        if (refresh) {
                            await instance({
                                method: 'post',
                                url: `/api/access-token/issue`,
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                data: {
                                    refresh
                                },
                            }).then((res) => {
                                store.commit('setRefresh', res.data.data);
                                isTokenRefreshing = false;
                                onTokenRefreshed();
                            }).catch((err) => {
                                console.log(err);
                            })
                        }

                        // try {
                        //     const rs = await axiosInstance.post("/api/access-token/issue", {
                        //         refreshToken: this.$store.state.refresh,
                        //     });

                        //     const { accessToken } = rs.data;

                        //     this.store.dispatch('setToken', accessToken);
                        //     TokenService.updateLocalAccessToken(accessToken);

                        //     return axiosInstance(originalConfig);
                        // } catch (_error) {
                        //     return Promise.reject(_error);
                        // }
                    }
                    return retryOrigReq;



                }
                return Promise.reject(err);
            }
        )
    )
};

