import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux'


import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));



/* 
  redux的山歌核心概念:
    store:
      有一个state属性,集中存储了项目中所需的所有共享数据
      要修改数据,通过store.dispatch(需求)去修改
    reducer:
      reducer是真正去修改数据的角色
      reducer在创建store的时候会调用一次,为了初始化数据,后面每次调用嗯呢dispatch,reducer 会调用,为了修改数据
      定义:function 函数名(state={初始值},action){switch .....}
      reducer是=要求是一个纯函数(输入统一的值,得到同样的结果)
    action:
      action是一个普通的对象,表示修改数据的需求
      action对象上至少有一个type属性,值用来描述需求类型(一般写成大写的字符串[常量])
      除了type属性必须写,其他属性根据需求可选
      


    



*/



// 使用redux
/* 
  此时写的redux和react没有关系,写在这里只是为了在浏览器中可以查看数据
  1.下载 
    npm i redux / year add redux
  2.导入一个函数
    import { createStore } from 'redux'
  3.根据函数,创建对象 
    const store = createStore(reducer函数)
  4.定义一个reducer函数(reducer要求是一个纯函数[传入相同的值会得到相同的结果])
    纯函数:这就是可预测
      {function fn(x){return x+Math.random()}}
    function reducer(state,action){
      switch (action.type) {
      case 'INCREMENT':
        return {count: state.count + 1}
      case 'DECREMENT':
        return { count: state.count - 1}
      default:return state
      } 
    }
  5.调用dispatch分发任务
    store.dispatch({ type: 'INCREMENT' })
  */
function reducer(state = { count: 0, msg: '呵呵' }, action) {

  // console.log(state, action)//查看被调用了几次,
  switch (action.type) {//判断type
    case 'INCREMENT':
      // 注意:reducer函数中return什么store中state的值就变成什么,是会覆盖的
      return {
        ...state,//作用是展开,展开后,下面重名覆盖上面,而其他的还是存在
        count: state.count + action.data
      }

    case 'DECREMENT':
      // state.count--//不建议这么写,因为是改的原数据
      // return state
      return {
        ...state,
        count: state.count - action.data
      }

    // 必须写default
    default:
      return state
  }
}
// 创建store对象的时候,内部会调用一次reducer函数(初始化state),之后需要reducer再次执行,只能dispatch({type:'.....'})
// 后面可以写初始值,优先级当前行更高,这是因为已经赋值了es6的语法中,state值不是undefined,初始化值就不会生效
// const store = createStore(reducer,{count:10})
const store = createStore(reducer)


// 想要查看数据(不用记)
console.log(store.getState());//{count:0,msg:'呵呵'}
// 调用了dispatch,reducer就会执行
// 调用dispatch,将action传递给reducer
store.dispatch({ type: 'INCREMENT', data: 5 })
console.log(store.getState());//{count:5,msg:'呵呵'}
store.dispatch({type:'DECREMENT',data:3})
console.log(store.getState());//{count:2,msg:'呵呵'}

