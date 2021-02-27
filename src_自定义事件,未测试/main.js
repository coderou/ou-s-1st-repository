import Vue from 'vue'
import App from './App.vue'
// assets中的公共样式都在这里引入
import './assets/css/base.css'


Vue.config.productionTip = false


new Vue({
  render: (h) => h(App),
}).$mount('#app')
