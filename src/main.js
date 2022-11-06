import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'
import VueCookie from 'vue-cookie'
import store from './store';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import axios from 'axios'
import Vuex from 'vuex'



const app = createApp(App)

app.use(BootstrapVue3)
app.use(router)
app.mount('#app')
app.use(store)
app.use(axios)


