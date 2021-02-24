import React, { Component } from 'react'

import './List.css'
export default class List extends Component {
  render() {
    // console.log(this.props)
    // 注意:this.props.children是List组件使用时,子节点位置的内容
    // console.log(this.props.children)
    return (
    <ul className="todo-main">
      <h3>任务列表</h3>
      {this.props.children}
    </ul>)

  }
}
