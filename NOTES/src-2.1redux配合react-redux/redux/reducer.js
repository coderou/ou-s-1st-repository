let initState = { count: 0,mag:'呵呵',lunch:'油麦菜' }
function reducer(state = initState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + action.data,
      }

    default:
      return state
  }
}

export default reducer