import { createRouter, createWebHistory } from 'vue-router'
import Blog from '@/views/Blog/Index'
import BlogPostView from '@/views/Blog/PostView'
import Admin from '@/views/Admin/Index'
import AdminPostCreate from '@/views/Admin/PostCreate'
import AdminPostEdit from '@/views/Admin/PostEdit'
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
    path: '/admin/new',
    name: 'admin.post.create',
    component: AdminPostCreate
  },
  {
    path: '/blog/:slug',
    name: 'blog.post.view',
    component: BlogPostView
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
