<template>
  <div>
    <h1>{{ num }}</h1>
    <!-- 绑定自定义事件 -->
    <!-- <Child @add="add" /> -->
    <!-- add可以不一样,但是一般写一一样的 -->

    <Child @add="add" @click="add" />
    <!-- 凡是给组件绑定的事件,其实都是自定义事件,虽然名字好像普通事件,但是其实就是自定义的事件 -->

    <!-- <Child ref="child" /> -->
  </div>
</template>
<script type="text/ecmascript-6">
/* 
  自定义事件,可以用来组件间通信(子-->父)(原理父亲给儿子遥控器,儿子按)
    注意:给某个组件绑定,就只有这个组件可以触发,包括父亲也不行
    tip:自定义事件总线和这个相关,可以将事件定义在Vue的原型上
    使用:
      1.绑定事件
        <Child @事件名="事件回调函数" />

        <Child ref="xxx"/>
        mounted(){
          this.$refs.xxx$on(事件名,事件回调函数)
        }
        beforeDestroy(){
          // 解绑事件
          this.$refs.xxx.$off(事件名,事件回调函数)
        }
      2.触发事件
        - this.$emit(事件名称,参数1,参数2....)
        - ths.$listeners.事件名(参数1,参数2....)
      3.组件实例对象上的方法(程序界通用)
        $on绑定
        $once一次性
        $off解绑
        $emit触发
*/

import Child from "./Child";
export default {
  name: "App",
  components: {
    Child,
  },
  data() {
    return {
      num: 0,
    };
  },
  mounted() {
    console.log(this.$refs); //VueComponent组件实例对象
    // $on绑定事件(可以绑定n个回调)
    this.$refs.child.$on("add", this.add);
    this.$refs.child.$on("add", () => {
      console.log(222);
    });
    // 一次性事件
    this.$refs.child.$once("add", this.add);
    // ---自定义事件给那个组件绑定,就只有那个组件能触发
    // console.log(this.$listeners)
    // this.$emit('add')
  },
  beforeDestroy() {
    this.$refs.child.$off("add", this.add);
  },
  methods: {
    add(n, m) {
      console.log(111);
      this.num += n + m;
    },
  },
};
</script>

<style scoped>
</style>