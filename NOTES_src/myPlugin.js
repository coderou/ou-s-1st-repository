/* 
  定义Vue的插件:扩展Vue的功能
    - 扩展全局功能:将来通过Vue使用的功能
    - 扩展局部功能:将来通过Vue的实例(vm/this)使用的功能
  
  方式:
    1.对象形式
    2.函数形式
  使用/安装插件(必须掌握):
    Vue.use(插件名)
    注意:先安装插件.再newVue

*/
// 1.对象形式(一旦使用插件,自动调用install方法)
/* const myPlugin = {}
myPlugin.install = function (Vue) {
  // 扩展Vue的功能
  // 扩展全局功能
  Vue.globalMethod = function () {
    console.log('globalMethod()')
  }
  // 扩展局部功能
  Vue.prototype.$localMethod=function(){
    console.log('localMethod()');
  }
  // 自定义指令
  Vue.directive('upper-case',function(el,binding){
    el.textContent=binding.value.toUpperCase()
  })
  // 自定义过滤器
  Vue.filter('formatData',function(value,str){
    return dayjs(value).format(str)
  })
} */
// 2.函数形式
function myPlugin(Vue) {
  // 扩展Vue的功能
  // 扩展全局功能(Vue静态方法)
  Vue.globalMethod = function () {
    console.log('globalMethod()')
  }
  // 扩展局部功能(Vue实例方法)
  Vue.prototype.$localMethod = function () {
    console.log('localMethod()')
  }
  // 自定义指令
  Vue.directive('upper-case', function (el, binding) {
    el.textContent = binding.value.toUpperCase()
  })
  // 自定义过滤器
  Vue.filter('formatDate', function (value, str) {
    return dayjs(value).format(str)
  })
}
