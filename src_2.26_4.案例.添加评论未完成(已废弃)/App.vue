<template>
  <div>
    <Header />
    <Container />
  </div>
</template>

<script>
import Header from "./views/Header";
import Container from "./views/Container";
export default {
  name: "App",
  data() {
    return {
      num: 0,
    };
  },
  components: {
    Header,
    Container,
  },
};
</script>

<style lang="less" >
</style>>
