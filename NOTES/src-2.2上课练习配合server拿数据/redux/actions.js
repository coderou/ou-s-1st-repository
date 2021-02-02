import { GET_USERS_DATA } from './constants'
import axios from 'axios'


export function getUserData(data) {
  return { type: GET_USERS_DATA, data }
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