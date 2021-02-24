import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './redux/actions'

class Count extends Component {
  render() {
    return (
      <div>
        <div>{this.props.count}</div>
        <div>{this.props.name}</div>

        <button onClick={() => {
          this.props.dispatch(increment(1))
        }}>点击加1</button>

        <button onClick={() => {
          // 这个函数是connect底层封装后的函数,封装了dispatch
          this.props.increment(5)
        }}>点击加5</button>

      </div>
    )
  }
}

// 简写:
/* 
  connect函数第二个参数的位置上,如果传的是函数,那么就将这个函数中返回的对象里面的属性名和函数传递给count组件
  注意:如果第二个参数的位置上写的是一个对象,那么按照要求就必须传递一个actionCreater函数,这样写了之后,connect函数内部,执行的时候会帮我们创建一个新的函数,而新的函数名字和我们传入的actionCreater一样,

  ## 伪代码演示:(实际上,要遍历这个对象,)
  function increment(data){//这个是底层返回的函数,只是同名了而已
    dispatch(increment(data))//这个increment是connect传入的函数
  }
  
  ## 实际上:
  function key(data){
    dispatch(obj[key](data))
  }
*/
export default connect(state => ({ count: state.count }), {
  // 这个increment就是我们定义的actionCreater
  increment
})(Count)
// 传入的是increment,但是实例拿到的不是
// 为什么要底层封装>因为外面写函数返回对象,对象里面有函数的方式重复代码过多
