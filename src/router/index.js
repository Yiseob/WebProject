import { createWebHashHistory, createRouter } from 'vue-router'
import MainComponent from '../components/MainComponent.vue'
import LoginComponent from '../components/LoginComponent.vue'
import Cover from '../components/Cover/Cover.vue'
import Products from '../components/Products/Products.vue'
import Read from '../components/Bulletin/Read.vue'
import Create from '../components/Bulletin/Create.vue'


const routes = [
    { path: '/main', component: MainComponent },
    { path: '/login', component: LoginComponent },
    { path: '/', component: Cover },
    { path: '/products', component: Products },
    { path: '/read', component: Read },
    { path: '/create', component: Create },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router