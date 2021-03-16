import { createRouter, createWebHistory } from 'vue-router'
import Blog from '@/views/Blog/Index'
import BlogPostShow from '@/views/Blog/Post/Show'
import Admin from '@/views/Admin/Index'
import AdminPostCreate from '@/views/Admin/Post/Create'
import AdminPostEdit from '@/views/Admin/Post/Edit'
import Login from '@/views/Auth/Login'

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
    path: '/admin/create',
    name: 'admin.post.create',
    component: AdminPostCreate
  },
  {
    path: '/blog/:slug',
    name: 'blog.post.show',
    component: BlogPostShow
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/admin/:slug/edit',
    name: 'admin.post.edit',
    component: AdminPostEdit
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
