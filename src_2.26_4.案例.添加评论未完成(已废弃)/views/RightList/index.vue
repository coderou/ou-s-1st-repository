<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 style="display: none">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <RightItem />
      <RightItem />
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
import RightItem from "../RightItem";

export default {
  name: "RightList",
  data() {
    return {};
  },
  components: {
    RightItem,
  },
};
</script>

<style scoped>
</style>
