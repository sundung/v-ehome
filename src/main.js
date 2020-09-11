import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 适配
import 'amfe-flexible/index.js'
import {
  Button,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Grid,
  GridItem
} from 'vant'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Grid)
Vue.use(GridItem)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
