import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

import { listRouter } from "./list"

const listArr = listRouter
const arr: any[] = []
listArr.map((item, index) => {
  arr.push({
    path: item.path,
    name: item.name,
    component: item.component
  })
})

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  ...arr,
  // 测试练习
  {
    path: "/test",
    name: "test",
    component: () => import("../views/test/index.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
