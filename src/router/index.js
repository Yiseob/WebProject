import { createWebHistory, createRouter } from 'vue-router'
import MainComponent from '../pages/MainComponent.vue'
import LoginComponent from '../pages/LoginComponent.vue'
import Cover from '../pages/Cover.vue'
import Attendance from '../pages/Attendance.vue'
import QnA from '../pages/QnA.vue'
import Dots from '../pages/Dots.vue'
import ContentDetail from '../pages/ContentDetail.vue'
import Create from '../pages/Create.vue'
import AboutUs from '../pages/AboutUs.vue'
import SignIn from '../pages/SignIn.vue'


const routes = [
    { path: '/main', component: MainComponent },
    { path: '/login', component: LoginComponent },
    { path: '/',  component: Cover },
    { path: '/attendance', component: Attendance },
    { path: '/qna/free', component: QnA },
    { path: '/dots', component: Dots },
    { path: '/aboutUs', component: AboutUs },
    { path: '/qna/free/detail/:questionId', name: 'ContentDetail', component: ContentDetail },
    { path: '/qna/free/create/:questionId?', name: 'Create', component: Create },
    { path: '/signin', component: SignIn },
    { path: '/:catchAll(.*)', redirect:'/main', },

]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router