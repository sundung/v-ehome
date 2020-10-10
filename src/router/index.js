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
// 引入新增地址页面
import NewAddress from '@/views/NewAddress'
// 引入我的页面
import Mine from '@/views/Mine'
// 引入订单页面
import Order from '@/views/Order'
// 引入登录页面
import Login from '@/views/Login'
Vue.use(VueRouter)

const routes = [
  {
    // 首页
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    // 我的页面
    path: '/mine',
    name: 'Mine',
    component: Mine
  },
  {
    // 订单页面
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    // 登录页面
    path: '/login',
    name: 'Login',
    component: Login
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
  },
  {
    // 新增地址 页面
    path: '/newaddress',
    name: 'NewAddress',
    component: NewAddress
  }
]

const router = new VueRouter({
  routes
})

export default router
