import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: import('../views/home/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
  ,
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/index.vue')
  },
  // 选择城市
  {
    path: '/city',
    name: 'City',
    component: () => import('../views/home/selectCity.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../views/category/index.vue')
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import('../views/video/index.vue')
  },
  // 视频上传
  {
    path: '/videoUpload',
    name: 'videoUpload',
    component: () => import('../views/video/uploadFile.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/cart/index.vue')
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('../views/my/index.vue')
  },
  // 地址
  {
    path: '/address',
    name: 'Address',
    component: () => import('../views/my/address.vue')
  },
  // 新增地址
  {
    path: '/addAddress',
    name: 'addAddress',
    component: () => import('../views/my/components/addAddress.vue')
  },
  // 编辑地址
  {
    path: '/editAddress',
    name: 'editAddress',
    component: () => import('../views/my/components/editAddress.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/test.vue')
  },
  // 图片详情
  {
    path: '/homeDetail',
    name: 'homeDetail',
    component: () => import('../views/home/homeDetail.vue')
  },
  // search搜索页面
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/category/search.vue')
  },
  // category的详情页
  {
    path: '/categoryDetail',
    name: 'categoryDetail',
    component: () => import('../views/category/categoryDetail.vue')
  },
  // 登录注册页面
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/enter/login.vue')
  },
  // category的详情页
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/enter/register.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
