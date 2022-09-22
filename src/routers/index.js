import { createWebHistory, createRouter } from 'vue-router';





// [라우터 path 접속 경로 설정]
const routes = [
  {
    path: "/", // [경로]
    name: "Home", // [이름]
    component: "NavBar" // [로드 파일]
  },
  {
    path: "/login", // [경로]
    name: "Login", // [이름]
    component: "Loginw" // [로드 파일]
  }
];





// [라우터 설정 실시]
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;