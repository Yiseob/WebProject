import { createApp } from 'vue'
import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";


export default createStore({
    state: {
        token: null,
        isLogin: false
    },

    mutations: {  // commit 으로 부를 수 있다.
        setToken(state, _token) {
            state.token = 'Bearer ' + _token;
            state.isLogin = true
        }
    },
    actions: { // dispatch 로 부를 수 있다.
        setToken: ({ commit }, _token) => {
            commit('setToken', _token);
        }
    },
    plugins: [createPersistedState()],
}
);