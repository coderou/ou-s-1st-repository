import React, { Component } from 'react'

export default class Count extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={
          () => { this.props.increment(1) }
        }>点击加1</button>
        <button onClick={
          () => {
            // 1.发请求
            // setTimeout(() => {
            // 2.接收响应,响应成功
            // 3,根据数据,修改redux数据
            this.props.incrementAsync()//这次调用的incrementAsync[相当于]action中的incrementAsync返回的函数,只是相当于
            
            // }, 2000)
          }
        }>异步按钮+n(异步)</button>
      </div>
    )
  }
}
