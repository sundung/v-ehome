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
  GridItem,
  Popup,
  DatetimePicker,
  NavBar,
  Form,
  Field,
  radio,
  CellGroup,
  Dialog,
  Tab,
  Tabs,
  Icon
} from 'vant'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Popup)
Vue.use(DatetimePicker)
Vue.use(NavBar)
Vue.use(Form)
Vue.use(Field)
Vue.use(radio)
Vue.use(CellGroup)
Vue.use(Dialog)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
