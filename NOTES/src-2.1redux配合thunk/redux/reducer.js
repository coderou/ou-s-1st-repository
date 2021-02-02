import { INCREMENT, DECREMENT } from './constants'

let initState = { count: 0 }
function reducer(state = initState, action) {
  switch (action.type) {
    case INCREMENT://加法
      return {
        ...state,
        count: state.count + action.data
      }
    case DECREMENT://减法
      return {
        ...state,
        count: state.count + action.data
      }
    default:
      return state
  }
}


export default reducer