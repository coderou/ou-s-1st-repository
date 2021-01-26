import React, { Component } from 'react'
import './Header.css'
export default class Header extends Component {
  state = {
    todoName: ""
  }

  inpValueFn = (e) => {
    this.setState({ todoName: e.target.value })//实时改变this.state中的todoName的值
  }

  keyUpFn = (e) => {
    if (e.keyCode === 13) {
      this.props.fn(this.state.todoName)
    }
  }
  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" value={this.state.todoName} onChange={this.inpValueFn} onKeyUp={this.keyUpFn} />
      </div>
    )
  }
}
