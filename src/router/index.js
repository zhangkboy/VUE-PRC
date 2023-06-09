import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
  // 静态路由
  {
    path: '/',
    component: () => import('@/components/component2.vue')
  }
]
let router = new Router({
  mode: 'history',
  routes: constantRouterMap
})

export default router
