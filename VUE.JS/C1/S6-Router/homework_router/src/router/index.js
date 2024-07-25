import { createWebHistory, createRouter } from 'vue-router'
import HomePage from '@/views/HomePage.vue';
import AboutPage from '@/views/AboutPage.vue';
import MostWatch from '@/views/MostWatchPage.vue';



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
    path: '/most_watch',
    name: 'most_watch',
    component: MostWatch
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;