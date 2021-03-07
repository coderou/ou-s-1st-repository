<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 style="display: none">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <CommentItem
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
        :deleteItem="deleteItem"
      />
      <p v-if="this.comments.length === 0">没有评论</p>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
import CommentItem from "../CommentItem";
export default {
  name: "CommentList",
  // props:['comments'],//最宽松的,只要是这个属性,其他不管
  props: {
    comments: Array,
    deleteItem: Function,
  },
  // props:{
  //   comments:{
  //     type:Array,
  //     required:true,
  //   }
  // },
  mounted() {
    // 因为vue使用了数据代理,通过props传递的数据不需要再props了,直接this.即可
    // 使用props props会被数据代理
    console.log(this.comments);
  },
  components: {
    CommentItem,
  },
};
</script>

<style scoped>
.reply {
  margin-top: 0px;
}
</style>
