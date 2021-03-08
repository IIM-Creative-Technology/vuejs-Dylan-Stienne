import { createRouter, createWebHistory } from 'vue-router'
import Blog from '@/views/Blog'
import Admin from '@/views/Admin'
import Login from '@/views/Login'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: { name: 'blog' }
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    redirect: { name: 'blog' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
