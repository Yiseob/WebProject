import { createApp } from 'vue'
import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";


export default createStore({
    state: {
        isLogin: false,
        token: null,
        role: null,
        refresh:null,

    },

    mutations: {  // commit 으로 부를 수 있다.
        setToken(state, _token) {
            state.token = 'Bearer ' + _token;
            state.isLogin = true
        },
        setRole(state, _role) {
            state.role = _role
        },
        setRefresh(state, _refresh) {
            state.refresh = _refresh
        },

        logOut(state) {
            state.isLogin = false;
            state.token = null;
            state.role = null;
            state.refresh = null;
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
        logOut: ({ commit }) => {
            commit('logOut');
        }
    },
    plugins: [createPersistedState()],
}
);