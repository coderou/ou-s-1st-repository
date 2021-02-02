import { GET_USERS_DATA, SETFLAG } from './constants'

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

}