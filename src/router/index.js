import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layouts'

Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/',
    component: Layout
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
