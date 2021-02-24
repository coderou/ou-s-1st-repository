import React, { Component } from 'react'

export default class Position extends Component {
  // 定义初始的x,y坐标值,同时随着鼠标事件的改变,handle函数改变其坐标
  state = { x: 0, y: 0 }
  // 单独定义函数,便于卸载事件
  handle = (e) => { this.setState({ x: e.clientX, y: e.clientY }) }
  // 组件挂载,添加window事件
  componentDidMount() { window.addEventListener('mousemove', this.handle) }
  // 组件即将卸载,删除window事件
  componentWillUnmount() { window.removeEventListener('mousemove', this.handle) }
  render() {
    // 方法1:通过app组件props传递函数,改函数返回值是一个逐渐,这里调用后,可以得到一个组件,同时this.state传递进改组件
    // return this.props.render(this.state)
    // 方法2:写法的改变,通过children获取,原理不变
    return this.props.children(this.state)
  }
}
