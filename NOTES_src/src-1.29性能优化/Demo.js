import React, { Component } from 'react'

export default class Demo extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    //判断这次传过来的props.count的值和上一次的值是否相同,如果相同,就返回false,否则true
    // 只是在这个中表示旧的
    return this.props !== nextProps
  }
  render() {
    console.log('demo更新')
    return (
      <div>
        <p>demo组件</p>
        <p>{this.props.count}</p>
      </div>
    )
  }
}
