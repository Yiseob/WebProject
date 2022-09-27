import { createWebHashHistory, createRouter } from 'vue-router'
import MainComponent from '../pages/MainComponent.vue'
import LoginComponent from '../pages/LoginComponent.vue'
import Cover from '../pages/Cover.vue'
import Products from '../components/Products/Products.vue'
import Board from '../pages/Board.vue'
import Dots from '../pages/Dots.vue'
import ContentDetail from '../pages/ContentDetail.vue'
import Create from '../pages/Create.vue'


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