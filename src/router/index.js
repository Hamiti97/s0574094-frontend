import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Filme from '@/views/Filme'
import Filmgenerator from '@/views/Filmgenerator'
import Guide from '@/views/Guide'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/filme',
    name: 'Filme',
    component: Filme
  },
  {
    path: '/filmgenerator',
    name: 'Film Generator',
    component: Filmgenerator
  },
  {
    path: '/guide',
    name: 'Guide',
    component: Guide
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
