import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'

import JiaDianWeiXiu from '@/views/JiaDianWeiXiu'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/jiadianweixiu',
    name: 'JiaDianWeiXiu',
    component: JiaDianWeiXiu
  }
]

const router = new VueRouter({
  routes
})

export default router
