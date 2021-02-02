import { GET_USER_SUCCESS } from './constants'

let initState = { users: [] }


export default function userReducer(state = initState, action) {
  switch (action.type) {
    case GET_USER_SUCCESS:
      // console.log(action);
      return {
        ...state,
        users: action.data
      }

    default:
      return state
  }

}