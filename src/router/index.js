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
// 引入注册页面
import Register from '@/views/Register'
// 引入维修清单页面
import Maintenance from '@/components/Maintenance'
// 引入 待接单详情
import OrderWaitDetail from '@/components/OrderDetail/OrderWaitDetail'
// 引入 待上门详情
import OrderWaitHomeDetail from '@/components/OrderDetail/OrderWaitHomeDetail'
// 引入 已结束订单详情页面
import OrderEndDetail from '@/components/OrderDetail/OrderEndDetail'
// 引入服务中订单详情
import OrderServingDetail from '@/components/OrderDetail/OrderServingDetail'
// 引入待支付订单详情
import OrderPayDetail from '@/components/OrderDetail/OrderPayDetail'
// 引入已支付订单页面
import OrderPaidDetail from '@/components/OrderDetail/OrderPaidDetail'
// 引入已经支付完成,有售后和投诉的详情页面
import OrderEndAfterSale from '@/components/OrderDetail/OrderEndAfterSale'
// 引入品质保障详情
import QualityAssuranceDetail from '@/components/OrderDetailComponents/QualityAssuranceDetail'
//  引入 取消订单原因详情页面
import CancelOrderDetail from '@/components/OrderDetailComponents/CancelOrderDetail'
// 引入 结束服务原因详情页面
import EndService from '@/components/OrderDetailComponents/EndService'
// 引入 投诉详情页面
import Complaint from '@/components/OrderDetailComponents/Complaint'
// 引入 收费标准表格组件
import ChargingStandards from '@/components/ChargingStandards'

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
    // 注册页面
    path: '/register',
    name: 'Register',
    component: Register
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
  },
  {
    // 维修清单 页面
    path: '/maintenance',
    name: 'Maintenance',
    component: Maintenance
  },
  {
    // 维修标准组件 页面
    path: '/ChargingStandards',
    name: 'ChargingStandards',
    component: ChargingStandards
  },
  {
    // 待接单详情 页面
    path: '/orderwaitdetail',
    name: 'OrderWaitDetail',
    component: OrderWaitDetail
  },
  {
    // 待上门详情页面
    path: '/OrderWaitHomeDetail',
    name: 'OrderWaitHomeDetail',
    component: OrderWaitHomeDetail
  },
  {
    // 服务中详情页面
    path: '/OrderServingDetail',
    name: 'OrderServingDetail',
    component: OrderServingDetail
  },
  {
    // 已结束订单详情页面
    path: '/OrderEndDetail',
    name: 'OrderEndDetail',
    component: OrderEndDetail
  },
  {
    // 待支付订单详情页面
    path: '/OrderPayDetail',
    name: 'OrderPayDetail',
    component: OrderPayDetail
  },
  {
    // 已支付订单详情页面
    path: '/OrderPaidDetail',
    name: 'OrderPaidDetail',
    component: OrderPaidDetail
  },
  {
    // 已结束订单详情页面(包含投诉,申请售后)
    path: '/OrderEndAfterSale',
    name: 'OrderEndAfterSale',
    component: OrderEndAfterSale
  },
  {
    // 品质保障详情 页面
    path: '/QualityAssuranceDetail',
    name: 'QualityAssuranceDetail',
    component: QualityAssuranceDetail
  },
  {
    // 取消订单原因详情 页面
    path: '/CancelOrderDetail',
    name: 'CancelOrderDetail',
    component: CancelOrderDetail
  },
  {
    // 结束服务原因详情 页面
    path: '/EndService',
    name: 'EndService',
    component: EndService
  },
  {
    // 投诉详情 页面
    path: '/complaint',
    name: 'Complaint',
    component: Complaint
  }
]

const router = new VueRouter({
  routes
})

export default router
