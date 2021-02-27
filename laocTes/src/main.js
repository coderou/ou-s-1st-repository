import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/config/rem'//移动端rem适配
Vue.config.productionTip = false
if (process.env.NODE_ENV === 'development') {
  require('@/api/mock')
}
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
