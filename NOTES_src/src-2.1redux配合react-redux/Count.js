import React, { Component } from 'react'
// 从react-redux包中导出一个高阶组件的函数
// 这个函数用来链接当前Count组件和redux
import { connect } from 'react-redux'

class Count extends Component {
  render() {
    // console.log(this.props);//{dispatch:f}
    return (
      <div>
        <div>{this.props.count}</div>
        <div>{this.props.xxx}</div>
        <button onClick={() => {
          this.props.dispatch({ type: 'INCREMENT', data: 1 })
        }}>按钮+1</button>
      </div>
    )
  }
}

// 注意:如果connect第一次调用的时候什么都没有写,那么在react的组件中只能通过this.props拿到一个dispatch方法
// 如果要拿到redux中的数据,那么connect函数第一次调用,的第一个参数,要求传入一个函数

// 改函数第一次调用connect,传递数据到Count,后期数据发生变化,再次调用改函数,传递数据
function mapStateToProps(state) {//map:映射 形参state:redux中所有的数据
  // 注意:state是redux中的所有数据
  // return的要求是一个对象,对象里写了什么,在Count组件中,通过props就可以拿到什么
  return {
    count: state.count,
    xxx: state.msg
  }



}
export default connect(mapStateToProps)(Count)

