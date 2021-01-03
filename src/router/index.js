import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layouts'

Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/layout',
    component: Layout,
    meta: {
      title: 'Layout',
      action: 'mdi-silverware-fork-knife'
    }
  },
  {
    path: '/',
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
          title: '首页'
        }
      },
      {
        path: 'about',
        component: () => import('@/views/About'),
        name: 'About',
        meta: {
          title: '关于'
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
    // mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
