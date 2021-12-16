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
    meta: {  icon: 'dashboard',affix: true },
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "dashboard" */ '../views/Index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
  {
    path: '/example',
    name: 'example',
    redirect: '/example/test',
    component: Layout,
    meta: { title: 'Example', icon: 'example',affix: true },
    children: [
      {
        path: 'test',
        name: 'Test',
        component: () => import(/* webpackChunkName: "test" */ '../views/test'),
        meta:{title:'test',affix: true}
      },
      {
        path: 'about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About'),
        meta:{title:'关于',affix: true}
      }
    ]
  },
  // {
  //   path: '/example2',
  //   name: 'example2',
  //   redirect: '/example2/test',
  //   component: Layout,
  //   meta: { title: 'Example', icon: 'example',affix: true },
  //   children: [
  //     {
  //       path: 'test2',
  //       name: 'Test2',
  //       component: () => import(/* webpackChunkName: "test" */ '../views/test'),
  //       meta:{title:'test2',affix: true}
  //     },
  //     {
  //       path: 'about2',
  //       name: 'about2',
  //       component: () => import(/* webpackChunkName: "about" */ '../views/About'),
  //       meta:{title:'关于',affix: true}
  //     }
  //   ]
  // },
  // {
  //   path: '/example3',
  //   name: 'example3',
  //   redirect: '/example3/test',
  //   component: Layout,
  //   meta: { title: 'Example', icon: 'example',affix: true },
  //   children: [
  //     {
  //       path: 'test3',
  //       name: 'Test3',
  //       component: () => import(/* webpackChunkName: "test" */ '../views/test'),
  //       meta:{title:'test3',affix: true}
  //     },
  //     {
  //       path: 'about3',
  //       name: 'about3',
  //       component: () => import(/* webpackChunkName: "about" */ '../views/About'),
  //       meta:{title:'关于',affix: true}
  //     }
  //   ]
  // },
  // {
  //   path: '/example4',
  //   name: 'example4',
  //   redirect: '/example4/test',
  //   component: Layout,
  //   meta: { title: 'Example', icon: 'example',affix: true },
  //   children: [
  //     {
  //       path: 'test4',
  //       name: 'Test4',
  //       component: () => import(/* webpackChunkName: "test" */ '../views/test'),
  //       meta:{title:'test',affix: true}
  //     },
  //     {
  //       path: 'about4',
  //       name: 'about4',
  //       component: () => import(/* webpackChunkName: "about" */ '../views/About'),
  //       meta:{title:'关于',affix: true}
  //     }
  //   ]
  // },
  // {
  //   path: '/example5',
  //   name: 'example5',
  //   redirect: '/example5/test',
  //   component: Layout,
  //   meta: { title: 'Example', icon: 'example',affix: true },
  //   children: [
  //     {
  //       path: 'test5',
  //       name: 'Test5',
  //       component: () => import(/* webpackChunkName: "test" */ '../views/test'),
  //       meta:{title:'test',affix: true}
  //     },
  //     {
  //       path: 'about5',
  //       name: 'about5',
  //       component: () => import(/* webpackChunkName: "about" */ '../views/About'),
  //       meta:{title:'关于',affix: true}
  //     }
  //   ]
  // },
  // {
  //   path: '/example6',
  //   name: 'example6',
  //   redirect: '/example6/test',
  //   component: Layout,
  //   meta: { title: 'Example', icon: 'example',affix: true },
  //   children: [
  //     {
  //       path: 'test7',
  //       name: 'Test7',
  //       component: () => import(/* webpackChunkName: "test" */ '../views/test'),
  //       meta:{title:'test',affix: true}
  //     },
  //     {
  //       path: 'about7',
  //       name: 'about7',
  //       component: () => import(/* webpackChunkName: "about" */ '../views/About'),
  //       meta:{title:'关于',affix: true}
  //     }
  //   ]
  // },
  // {
  //   path: '/example8',
  //   name: 'example8',
  //   redirect: '/example8/test',
  //   component: Layout,
  //   meta: { title: 'Example', icon: 'example',affix: true },
  //   children: [
  //     {
  //       path: 'test8',
  //       name: 'Test8',
  //       component: () => import(/* webpackChunkName: "test" */ '../views/test'),
  //       meta:{title:'test',affix: true}
  //     },
  //     {
  //       path: 'about8',
  //       name: 'about8',
  //       component: () => import(/* webpackChunkName: "about" */ '../views/About'),
  //       meta:{title:'关于',affix: true}
  //     }
  //   ]
  // },
  // {
  //   path: '/example9',
  //   name: 'example9',
  //   redirect: '/example9/test',
  //   component: Layout,
  //   meta: { title: 'Example', icon: 'example',affix: true },
  //   children: [
  //     {
  //       path: 'test9',
  //       name: 'Test9',
  //       component: () => import(/* webpackChunkName: "test" */ '../views/test'),
  //       meta:{title:'test',affix: true}
  //     },
  //     {
  //       path: 'about9',
  //       name: 'about9',
  //       component: () => import(/* webpackChunkName: "about" */ '../views/About'),
  //       meta:{title:'关于',affix: true}
  //     }
  //   ]
  // },
  // {
  //   path: '/example11',
  //   name: 'example11',
  //   redirect: '/example11/test',
  //   component: Layout,
  //   meta: { title: 'Example', icon: 'example',affix: true },
  //   children: [
  //     {
  //       path: 'test11',
  //       name: 'Test11',
  //       component: () => import(/* webpackChunkName: "test" */ '../views/test'),
  //       meta:{title:'test',affix: true}
  //     },
  //     {
  //       path: 'about11',
  //       name: 'about11',
  //       component: () => import(/* webpackChunkName: "about" */ '../views/About'),
  //       meta:{title:'关于',affix: true}
  //     }
  //   ]
  // },
  { path: "/:catchAll(.*)", redirect: '/404', hidden: true }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router
