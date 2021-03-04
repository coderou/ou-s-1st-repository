<template>
  <div>
    <ul>
      <li><router-link to="/home/messages">messages</router-link></li>
      <li><router-link to="/home/news">news</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: "Home",
};
</script>

<style lang='less' scoped>
</style>