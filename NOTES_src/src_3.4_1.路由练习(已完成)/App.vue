<template>
  <div>
    <router-link to="/home">home</router-link>
    <router-link to="/about">about</router-link>
    <br />
    <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: "App",
};
</script>

<style lang='less' scoped>
</style>