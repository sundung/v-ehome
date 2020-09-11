import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 适配
import 'amfe-flexible/index.js'
import { Button, Tabbar, TabbarItem, Swipe, SwipeItem } from 'vant'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Swipe)
Vue.use(SwipeItem)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
