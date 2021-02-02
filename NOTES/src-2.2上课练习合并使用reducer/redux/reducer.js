// 为了工作中能协作开发,避免代码冲突,要将reducer分开写,但是store只能接受一个reducer函数,所以最终需要将分开的reducer合并起来

import { combineReducers } from 'redux'
import userreducer from './userreducer'
import flagreducer from './flagreducer'

const rootReducer = combineReducers({
  xxx: userreducer,
  flagreducer//名字随便取
})

// 将reducer分开写之前的数据结构是
/* 
{ 
  users: [], 
  flag: 'all' 
} 
*/
// 分开写之后再合并起来的数据结构
/* 
{
  xxx:{
    users:[]
  },
  flagreducer:{
    flag:'all'
  }
}
*/
export default rootReducer



















/* import { GET_USERS_DATA, SETFLAG } from './constants'

let initState = {
  users: [],
  flag: 'all'
}

export default function userReducer(state = initState, action) {
  switch (action.type) {
    case GET_USERS_DATA:
      return {
        ...state,
        users: action.data
      }
    case SETFLAG:
      return {
        ...state,
        flag: action.data
      }
    default:
      return state
  }

} */