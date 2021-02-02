import { INCREMENT, DECREMENT } from './constants'


let initState = { count: 0 }
function reducer(state = initState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.data//count要为当前的数据加上action.data的数据
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count + action.data
      }
    default:
      return state
  }
}

export default reducer