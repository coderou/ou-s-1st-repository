import React, { Component } from 'react'
import './List.css'

export default class List extends Component {
  render() {
    return (
    <ul className="todo-main">
      <h3>任务列表</h3>
      {this.props.children}
    </ul>)

  }
}
