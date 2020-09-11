import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入轮播图组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 引入轮播图组件样式 Swiper 6.0.0 or higher
import 'swiper/swiper-bundle.css'
import { Button, Tabbar, TabbarItem } from 'vant'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Tabbar)
Vue.use(TabbarItem)
// 注册轮播图
Vue.use(VueAwesomeSwiper /* { default options with global component } */)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
