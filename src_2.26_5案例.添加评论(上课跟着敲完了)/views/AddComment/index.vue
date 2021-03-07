<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input
          type="text"
          v-model="comment.username"
          class="form-control"
          placeholder="用户名"
        />
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea
          v-model="comment.content"
          class="form-control"
          rows="6"
          placeholder="评论内容"
        ></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button
            type="button"
            class="btn btn-default pull-right"
            @click="clickHandle"
          >
            提交
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: "AddComment",
  props: {
    comments: Array,
    addItem: Function,
  },
  data() {
    return {
      comment: {
        username: "",
        content: "",
      },
    };
  },
  methods: {
    clickHandle() {
      if (this.comment.username !== "" && this.comment.content !== "") {
        this.addItem(this.comment);
        this.comment = {
          username: "",
          content: "",
        };
      }
    },
  },
};
</script>

<style scoped>
</style>
