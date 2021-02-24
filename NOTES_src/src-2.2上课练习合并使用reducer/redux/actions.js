import { GET_USERS_DATA ,SETFLAG} from './constants'
import axios from 'axios'


export function getUserData(data) {
  return { type: GET_USERS_DATA, data }
}
// 定义一个同步action修改flag数据
export function setFlagCreator(data) {
  return { type: SETFLAG, data }
}



export function getUserDataAsync(username) {
  return (dispatch) => {
    axios({
      url: 'http://localhost:5000/search/users',
      method: 'get',
      params: {
        username,
      }
    }).then(res => {
      console.log(res);
      dispatch(getUserData(res.data.items))
    })
  }
}