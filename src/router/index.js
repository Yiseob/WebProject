import { createWebHashHistory, createRouter } from 'vue-router'
import MainComponent from '../components/MainComponent.vue'
import LoginComponent from '../components/LoginComponent.vue'
import Cover from '../components/Cover/Cover.vue'
import Products from '../components/Products/Products.vue'
import Board from '../components/Board.vue'
import Dots from '../components/Dots.vue'
import ContentDetail from '../components/ContentDetail.vue'
import Create from '../components/Create.vue'


const routes = [
    { path: '/main', component: MainComponent },
    { path: '/login', component: LoginComponent },
    { path: '/', component: Cover },
    { path: '/products', component: Products },
    { path: '/Board/free', component: Board },
    { path: '/dots', component: Dots },
    { path: '/board/free/detail/:contentId', name:'ContentDetail', component: ContentDetail },
    { path: '/board/free/create/:contentId?', name:'Create', component: Create },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router