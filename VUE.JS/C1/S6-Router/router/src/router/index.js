import { createWebHistory, createRouter } from 'vue-router'
import HomePage from '@/views/HomePage.vue';
import AboutPage from '@/views/AboutPage.vue';
import UserPage from '@/views/UserPage.vue';



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/user',
    name: 'user',
    component: UserPage
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;