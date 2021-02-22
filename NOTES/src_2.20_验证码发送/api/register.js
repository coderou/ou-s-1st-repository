import axios from 'axios'

// 定义了和注册相关的发送请求的函数

function verifyPhone(phone) {
  return axios({
    // url: 'http://localhost:5000/regist/verify_phone',
    url: '/regist/verify_phone', //配置了代理之后,请求的地址必须使用相对路径,如果使用绝对路径,那么代理就没有用了
    method: 'post',
    data: {
      phone,
    },
  })
}
export { verifyPhone }
