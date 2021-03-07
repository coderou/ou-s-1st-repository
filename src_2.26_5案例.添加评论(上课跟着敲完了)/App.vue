<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <AddComment :comments="comments" :addItem="addItem" />
      <CommentList :comments="comments" :deleteItem="deleteItem" />
    </div>
  </div>
</template>

<script>
import AddComment from "./views/AddComment";
import CommentList from "./views/CommentList";
export default {
  data() {
    return {
      comments: [
        { id: 1, username: "老王", content: "劳资添加第一" },
        { id: 2, username: "小花", content: "老王隔壁一枝花" },
        { id: 3, username: "喜羊羊", content: "我穿越了?" },
      ],
    };
  },
  name: "App",
  components: {
    AddComment,
    CommentList,
  },
  methods: {
    addItem(comment) {
      console.log(comment);
      let newObj = {
        id: Date.now(),
        username: comment.username,
        content: comment.content,
      };
      this.comments.unshift(newObj);
    },
    deleteItem(id) {
      this.comments = this.comments.filter((i) => {
        return i.id !== id;
      });
    },
  },
};
</script>

<style>
</style>
