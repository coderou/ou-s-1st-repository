import React, { Component } from 'react'
// 这个组件,要用到父组件里面的数据,如果父组件传过来的数据,和上一次的数据不一样,就更新.如果一样, 就没必要更新了
export default class Demo extends Component {
  state = {
    msg: 'one',
  }
  shouldComponentUpdate(nextProps, nextState) {
    // nextProps 就是最新的props
    // this.props 表示上一次的props 注意: 只在这个钩子函数中this.props表示上一次.其他的都是表示最新的
    // nextState 表示最新的state
    // this.state 表示上一次的state
    // 判断什么呢?
    //判断这次传过来的props.count的值和上一次的值是否相同,如果相同就返回false.否则就返回true
    if (
      nextProps.count === this.props.count &&
      nextState.msg === this.state.msg
    ) {
      return false
    } else {
      return true
    }
  }
  render() {
    console.log('demo组件更新了')
    return (
      <div>
        <p>demo组件</p>
        <p>{this.props.count}</p>
        <button
          onClick={() => {
            this.setState({
              msg: 'two',
            })
          }}
        >
          demo的按钮
        </button>
      </div>
    )
  }
}
