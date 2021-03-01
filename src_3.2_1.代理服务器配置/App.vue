<template>
  <div class="container">
    <Search />
    <List />
  </div>
</template>
<script type="text/ecmascript-6">
import Search from "./Views/Search";
import List from "./Views/List";
export default {
  name: "App",
  components: {
    Search,
    List,
  },
};
</script>

<style scoped>
</style>