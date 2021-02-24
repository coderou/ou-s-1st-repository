import axios from 'axios'

// 接口:验证手机号是否存在
function verifyPhone(phone) {
  return axios({
    url: '/regist/verify_phone',
    method: 'post',
    data: {
      phone,
    },
  })
}
// 接口:获取验证码
function checkCode(phone, code) {
  return axios({
    url: '/regist/verify_code',
    method: 'post',
    data: {
      phone,
      code,
    },
  })
}
// 接口:注册用户
function register(phone, password) {
  return axios({
    url: '/regist/user',
    method: 'post',
    data: {
      phone,
      password,
    },
  })
}

export { verifyPhone, checkCode, register }
