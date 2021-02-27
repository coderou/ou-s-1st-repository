<template>
  <div class="home">
    <h1 class="h1">HOME</h1>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import {
  getBannerData,
  getUserData,
  getPosiData,
  getIndexEntryData,
  getRestaurantsData,
} from "@/api/data";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  async mounted() {
    /* let res = await getBannerData();
    console.log(res);
    let result = await getUserData();
    console.log(result); */
    let res = await getPosiData();
    console.log(res);
    let res2 = await getIndexEntryData();
    console.log(res2);
    let res3 = await getRestaurantsData();
    console.log(res3);
  },
};
</script>
<style lang="less">
.h1 {
  width: 3.75rem;
  height: 1rem;
  background: skyblue;
  font-size: 0.5rem;
  line-height: 1rem;
}
</style>