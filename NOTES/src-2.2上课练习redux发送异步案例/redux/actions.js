import { GET_USER_SUCCESS } from './constants'
import axios from 'axios'

// 定义actionCreator
export function getUserData(data) {
  return { type: GET_USER_SUCCESS, data }//返回的这个对象就是action
}

// 定义一个异步action
export function getUserDataAsync(username) {
  return (dispatch) => {
    // 发送异步请求
    axios({
      url: "http://localhost:5000/search/users",
      method: 'get',
      params: {
        username,
      }
    }).then(res=>{
      // 表示成功
      console.log(res)
      dispatch(getUserData(res.data.items))//!!!###这里直接调用同步的保存代码,而不是自己调
      
    })
  }
}