<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        v-model="searchName"
        placeholder="enter the name you search"
      />
      <button @click="sendSearchName">Search</button>
    </div>
  </section>
</template>
<script type="text/ecmascript-6">
export default {
  name: "Search",
  data() {
    return {
      searchName: "",
      oldsSearchName: "",
    };
  },
  methods: {
    sendSearchName(searchName) {
      const serchName = this.searchName.trim(); //去除空格
      if (!searchName) {
        //如果用户没有输入内容,不发送请求
        alert("请输入搜索内容");
        return;
      }
      if (this.oldsSearchName === searchName) {
        return;
      }
      this.$bus.$emit("sendSearchName", serchName);
      this.oldsSearchName = searchName;
    },
  },
};
</script>

<style scoped>
</style>