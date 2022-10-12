import Vue from 'vue';
import Vuex from 'vuex';


export default new Vuex.Store({
    state: {
        token: null,
        isLogin: false
    },

    mutations: {  // commit 으로 부를 수 있다.
        setToken(state, _token) {
            state.token = _token;
            state.isLogin = true
        }
    },
    actions: { // dispatch 로 부를 수 있다.
        setToken: ({ commit }, _token) => {
            commit('setToken', _token);
        }
    }
}
);