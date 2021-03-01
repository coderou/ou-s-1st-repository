<template>
  <div>
    <h2 v-if="isShowText">请输入搜索内容</h2>
    <h2 v-else-if="isLoading">loading...</h2>

    <div class="row" v-else>
      <div class="card" v-for="user in users" :key="user.id">
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style="width: 100px" />
        </a>
        <p class="card-text">{{ user.login }}</p>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import axios from "axios";
export default {
  name: "List",
  data() {
    return {
      isShowText: true, //初始化文字显示/隐藏
      isLoading: false, //决定loading显示/隐藏
      users: [], //用户列表数据
    };
  },
  mounted() {
    this.$bus.$on("sendSearchName", this.search);
  },
  methods: {
    search(searchName) {
      // console.log(searchName); //用户的搜索框内容
      // 切换loading
      this.isShowText = false;
      this.isLoading = true;
      // 发送请求
      axios
        // .get(`https://api.github.com/search/users?q=${searchName}`)
        // .get(`http://localhost:9527/search/users?q=${searchName}`)
        // .get(`http://localhost:8080/search/users?q=${searchName}`)
        // .get(`/search/users?q=${searchName}`)
        .get(`/api/search/users?q=${searchName}`)
        //最终版,记得所有的接口都要加上这个api,在vue.config.js中进行了proxy的配置,所有api的开头的接口都会拦截到并且进行proxy

        .then((res) => {
          // console.log(res)
          this.users = res.data.items.map((user) => {
            this.isLoading = false;
            return {
              id: user.id,
              login: user.login,
              avatar_url: user.avatar_url,
              html_url: user.html_url,
            };
          });
        })
        .catch((err) => {
          // console.log(err.message)
          if (err.message === "Network Error") {
            alert("网络连接失败,尝试打开网络后在访问");
          }
        });
      /* axios.get({
        url: "https://api.github.com/search/users",
        params: {
          q: searchName,
        },
      }); */
    },
  },
};
</script>

<style scoped>
</style>