import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout'
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    meta: { icon: 'dashboard', affix: true },
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "dashboard" */ '../views/Index'),
      meta: { title: 'Home', icon: 'dashboard' }
    }]
  },
  {
    path: '/example',
    name: 'example',
    redirect: '/example/test',
    component: Layout,
    meta: { title: 'Example', icon: 'example', affix: true },
    children: [
      {
        path: 'test',
        name: 'Test',
        component: () => import(/* webpackChunkName: "test" */ '../views/test'),
        meta: { title: 'test', affix: true }
      },
      {
        path: 'about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About'),
        meta: { title: 'About', affix: true }
      }
    ]
  },
  { path: '/:catchAll(.*)', redirect: '/404', hidden: true }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router
