import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Filme from '@/views/Filme'
import Filmgenerator from '@/views/Filmgenerator'
import Test from '@/views/Test'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
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
    path: '/test',
    name: 'Test',
    component: Test
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
