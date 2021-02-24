// 封装每一个任务需求对应的函数
// 封装的这种类型的函数,最终其实就是返回了一个action对象
// 所以这类函数有一个名称,叫做actionCreator

// 导入常量
import {INCREMENT,DECREMENT} from './constants'




function increment(data) {
  return { type: INCREMENT, data }
}

function decrement(data) {
  return { type: DECREMENT, data }
}


export { increment, decrement }