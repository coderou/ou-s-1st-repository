<template>
  <div>
    <p>这是content</p>
    <ul>
      <li v-for="(value, key) in show" :key="key">
        {{ key }} -- {{ value }}---{{ test }}
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: "Content",
  props: ["test"],
  data() {
    return {
      todos: [
        { id: 1, name: "吃饭" },
        { id: 2, name: "睡觉" },
        { id: 3, name: "喝茶" },
      ],
      show: {},
    };
  },
  mounted(){
    console.log(this.test)
  },
  watch: {
    $route: {
      handler(newVal) {
        // console.log(newVal);
        const id = +newVal.params.id;
        this.show = this.todos.find((i) => {
          return i.id === id;
        });
      },
      immediate: true,
    },
  },
};
</script>

<style lang='less' scoped>
</style>