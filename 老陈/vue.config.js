module.exports = {
  // 目标:配置开发服务器
  // 百度:vue cli->配置参考->vue.config.js->devServer
  devServer: {
    // 注意:只需要部分请求找代理
    proxy: {
      '/api': {
        //解释:真正的目标服务器,凡是访问这个地址的,就会进入代理操作
        target: 'http://localhost:3000',
        //解释:没有对应的api地址,所以要进行重写
        pathRewrite: {
          //解释:当匹配到api,去掉字符串即可
          '^/api': '',
        },
      },
    },
  },
}
