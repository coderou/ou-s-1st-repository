import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()//全局事件总线
new Vue({
  render: (h) => h(App),
}).$mount('#app')
