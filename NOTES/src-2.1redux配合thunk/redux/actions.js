import { INCREMENT, DECREMENT } from './constants';

function increment(data) {
  return { type: INCREMENT, data }
}

function decrement(data) {
  return { type: DECREMENT, data }
}

// 为了配合redux-thunk从而实现可以在redux中发送异步请求的目的,按照redux-thunk这个中间价你的要求,应该在actions.js中定义一个异步的actionCreater
function incrementAsync() {
  // 发送请求的代码写在这里
  return (dispatch) => {
    // 执行异步行秋,xhr.......
    // 假设执行settimeout就是发送请求
    setTimeout(() => {
      // 假设回调执行了,就是响应成功了
      // 假设拿到的是6
      dispatch(increment(6))
    }, 2000);
  }
}

export { increment, decrement, incrementAsync }