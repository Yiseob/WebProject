import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'
import VueCookie from 'vue-cookie'
import store from './store';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

// import store from './vuex/store'


// Optional, since every component import their Bootstrap functionality
// the following line is not necessary
// import 'bootstrap'

const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)
app.use(store)
app.mount('#app')

window.Kakao.init('424f2da784ec819e556030a2493f9039');