import { createApp } from 'vue'
import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";


export default createStore({
    state: {
        isLogin: false,
        token: null,
        expireTime: null,
        role: null,
        refresh: null,
    },
    getters: {
        isExpire() {
            let atTime = new Date();
            let expire = expireTime
            if (expire <= atTime) {
                return true
            } else {
                return false
            }
        }
    },

    mutations: {  // commit 으로 부를 수 있다.
        setToken(state, _token) {
            state.token = 'Bearer ' + _token;
            state.isLogin = true
        },
        setRole(state, _role) {
            state.role = _role
        },
        setExpireTime(state, _expireTime) {
            state.expireTime = new Date(_expireTime)
        },
        setRefresh(state, _refresh) {
            state.refresh = _refresh
        },

        logOut(state) {
            state.isLogin = false;
            state.token = null;
            state.role = null;
            state.refresh = null;
            state.expireTime = null;
        }

    },
    actions: { // dispatch 로 부를 수 있다.
        setToken: ({ commit }, _token) => {
            commit('setToken', _token);
        },
        setRefresh: ({ commit }, _refresh) => {
            commit('setRefresh', _refresh);
        },
        setRole: ({ commit }, _role) => {
            commit('setRole', _role);
        },
        setExpireTime: ({ commit }, _expireTime) => {
            commit('setExpireTime', _expireTime);
        },
        logOut: ({ commit }) => {
            commit('logOut');
        }
    },
    plugins: [createPersistedState()],
}
);