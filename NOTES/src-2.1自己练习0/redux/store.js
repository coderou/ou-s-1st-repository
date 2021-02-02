import reducer from './reducer';//导入reducer
import { createStore } from 'redux'//导入createStore方法


let store = createStore(reducer)//通过createStore创建一个store
export default store//导出store