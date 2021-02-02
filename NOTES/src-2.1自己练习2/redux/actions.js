import { INCREMENT, DECREMENT } from './constants'

function increment(data) {
  return { type: INCREMENT, data }//这里返回对象后,在CountContainer里面会因为简写,自动调用了dispatch,所以不用收东西饿dispatch
  // dispatch写法:(在count实例中写)
  // this.props.dispatch({ type: 'INCREMENT', data: 1 })
}


function decrement(data) {
  return { type: DECREMENT, data }
}


function incrementAsync() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(6))
    }, 2000);
  }
}

export { increment, decrement, incrementAsync }