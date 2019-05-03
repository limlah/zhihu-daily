import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//全局引入vue-awesome-swiper插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// 初始化样式
import 'normalize.css'

// 引入icon
import './assets/icon/iconfont.css'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
