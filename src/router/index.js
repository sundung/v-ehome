import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入首页
import Home from '@/views/Home'
// 引入家电维修页面
import JiaDianWeiXiu from '@/views/JiaDianWeiXiu'
// 引入立即预约页面
import Reservation from '@/views/Reservation'
// 引入选择服务地址页面
import ServiceAddress from '@/views/ServiceAddress'
Vue.use(VueRouter)

const routes = [
  {
    // 首页
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    // 家电维修页面
    path: '/jiadianweixiu',
    name: 'JiaDianWeiXiu',
    component: JiaDianWeiXiu
  },
  {
    // 立即预约页面
    path: '/reservation',
    name: 'Reservation',
    component: Reservation
  },
  {
    // 选择服务地址 页面
    path: '/serviceaddress',
    name: 'ServiceAddress',
    component: ServiceAddress
  }
]

const router = new VueRouter({
  routes
})

export default router
