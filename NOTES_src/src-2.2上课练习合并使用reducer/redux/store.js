import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'
import thunk from 'redux-thunk'


// process.nextTick(()=>{})//在任何轮询阶段nextTick优先执行
// process.env
// console.log(process.env);//可以获取到当前代码执行环境
const ENV = process.env.NODE_ENV === 'development'
export default createStore(
  rootReducer,
  ENV
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk)//redux-devtools-extension配合使用中间件thunk

)