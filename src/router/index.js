import { createWebHashHistory, createRouter} from 'vue-router'
import MainComponent from '../components/MainComponent.vue'
import LoginComponent from '../components/LoginComponent.vue'

const routes = [
    { path: '/', component: MainComponent },
    { path: '/login', component: LoginComponent },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router