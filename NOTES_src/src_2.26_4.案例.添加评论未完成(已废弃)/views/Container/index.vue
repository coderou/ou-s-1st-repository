<template>
  <div class="container">
    <Left :comment="comment" />
    <RightList :comment="comment" :deleteItem="deleteItem" />
  </div>
</template>
<script type="text/ecmascript-6">
import Left from "../Left";
import RightList from "../RightList";
export default {
  name: "Container",
  data() {
    return {
      comment: [
        { id: 1, username: "", userSay: "" },
        { id: 2, username: "", userSay: "" },
        { id: 3, username: "", userSay: "" },
      ],
    };
  },
  components: {
    Left,
    RightList,
  },
  methods: {
    deleteItem(id) {
      console.log(id);
    },
  },
};
</script>

<style scoped>
</style>
