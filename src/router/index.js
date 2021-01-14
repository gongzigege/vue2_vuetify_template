import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layouts'

Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    // hidden: true,
    meta: {
      title: 'Dashboard',
      action: 'mdi-silverware-fork-knife'
    },
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/Dashboard'),
        name: 'Dashboard',
        hidden: true,
        meta: { title: 'Dashboard', action: 'mdi-silverware-fork-knife', affix: true }
      }
    ]
  },
  {
    path: '/index',
    component: Layout,
    redirect: { name: 'Home' },
    meta: {
      title: 'Page',
      action: 'mdi-silverware-fork-knife'
    },
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home'),
        name: 'Home',
        meta: {
          title: '首页',
          action: 'mdi-silverware-fork-knife'
        }
      },
      {
        path: 'about',
        component: () => import('@/views/About'),
        name: 'About',
        meta: {
          title: '关于',
          action: 'mdi-silverware-fork-knife'
        }
      }
    ]
  }
]

export const asyncRoutes = [
  {},
  // 404 页面必须放在最后面 !!!
  { path: '*', redirect: '/404' }
]

const createRouter = () =>
  new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
