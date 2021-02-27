<template>
  <div>
    <h1>Child</h1>
    <button @click="clickHandle">按钮</button>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: "Child",
  mounted() {
    // 子组件通过 this.$listeners 属性获取到自定义的事件
    console.log(this);
    console.log(this.$listeners);
    console.log(this.$emit);
  },
  methods: {
    clickHandle() {
      // 2.触发自定义事件的回调函数(直接调用)
      // this.$listeners.add(1,2);

      // 3.触发自定义事件的方法(通过实例方法触发)
      this.$emit("add", 3, 4);
    },
  },
};
</script>

<style scoped>
</style>