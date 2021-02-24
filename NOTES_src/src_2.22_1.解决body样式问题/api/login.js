import axios from 'axios'

// 定义了和登录相关的发送请求的函数

function sendCode(phone) {
  return axios({
    url: '/login/digits',
    method: 'post',
    data: {
      phone,
    },
  })
}
export { sendCode }
