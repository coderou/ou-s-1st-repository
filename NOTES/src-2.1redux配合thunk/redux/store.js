import { createStore,applyMiddleware } from 'redux';
import reducer from './reducer'
import thunk from 'redux-thunk'


// 使用中间件调用applymiddleware传入要使用的中间件,可以使用多个,按照书写顺序执行
export default createStore(reducer,applyMiddleware(thunk))//多个直接,分开即可,执行顺序按照写的顺序
// export default createStore(reducer,{初始化数据},)//写的其他的其实是第三个参数,第二个参数只是省略了