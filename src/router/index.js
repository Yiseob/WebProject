import { createWebHashHistory, createRouter } from 'vue-router'
import MainComponent from '../components/MainComponent.vue'
import LoginComponent from '../components/LoginComponent.vue'
import Cover from '../components/Cover/Cover.vue'
import Products from '../components/Products/Products.vue'
import Read from '../components/Bulletin/Read.vue'
import Create from '../components/Bulletin/Create.vue'
import Detail from '../components/Bulletin/Detail.vue'
import Board from '../components/Board.vue'


const routes = [
    { path: '/main', component: MainComponent },
    { path: '/login', component: LoginComponent },
    { path: '/', component: Cover },
    { path: '/products', component: Products },
    { path: '/read', name:"Read", component: Read },
    { path: '/create/:contentId?', name: "Create", component: Create },
    { path: '/detail/:contentId', name: "Detail", component: Detail },
    { path: '/Board/free', component: Board },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router