import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layouts'

Vue.use(VueRouter)

/**
 * !!! 注意：
 * hidden: true                               如果设置为 true 则不展示在侧边栏(默认为 false)
 * name: 'RouteName'                          // ! 这个名称用于 <keep-alive> 必须设置
 * meta: {                                    当只有一个路由时，meta 需要添加在子路由中
 *  roles: ['admin', 'editor']                控制页面角色(权限) - 可以设置多个
 *  title: 'title'                            用于显示在侧边栏和 Tab - 建议设置
 *  icon: 'vuetify-icon-name'/'svg-name'      用于显示在侧边栏和 Tab
 *  noCache: true                             如果设置为 true 则不对页面进行缓存(默认为false)
 *  fixTab: true                              如果设为 true, 则将此路有固定在Tabs
 * }
 */
export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/Dashboard'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'mdi-silverware-fork-knife', fixTab: true }
      }
    ]
  }
]

export const asyncRoutes = [
  {
    path: '/index',
    component: Layout,
    redirect: { name: 'Home' },
    meta: {
      title: 'Page',
      icon: 'mdi-silverware-fork-knife'
    },
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home'),
        name: 'Home',
        meta: {
          title: '首页'
        },
        children: [
          {
            path: 'asdfasdf',
            component: () => import('@/views/Dashboard'),
            name: 'Dasdf',
            meta: { title: 'ASdasdf', tabsFix: true }
          }
        ]
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
  },
  // 404 页面必须放在最后面 !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes.concat(asyncRoutes)
  })

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
