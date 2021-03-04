<template>
  <div>
    <ul>
      <!-- <li v-for="message in messages" :key="message.id">
        <router-link :to="`/home/messages/content/${message.id}`">{{
          message.message
        }}</router-link>
      </li> -->
      <li v-for="message in messages" :key="message.id">
        <router-link
          :to="{
            name: 'Content',
            params: { id: message.id },
            query: { name: 'jack', age: 14 },
          }"
          >{{ message.message }}</router-link
        >
      </li>
    </ul>
    <router-view test="传递message"></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: "Messages",
  data() {
    return {
      messages: [
        { id: "1", message: "你好", time: "2020.2" },
        { id: "2", message: "我是coderou", time: "2020.3" },
        { id: "3", message: "这是路由练习", time: "2020.5" },
      ],
    };
  },
};
</script>

<style lang='less' scoped>
</style>