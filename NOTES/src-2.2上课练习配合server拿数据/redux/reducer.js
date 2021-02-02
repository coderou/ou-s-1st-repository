import { GET_USERS_DATA } from './constants'

let initState = {
  users: []
}

export default function userReducer(state = initState, action) {
  switch (action.type) {
    case GET_USERS_DATA:
      return {
        ...state,
        users:action.data
      }
    default:
      return state
  }

}