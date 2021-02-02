import React, { Component } from 'react'
import './Header.css'
export default class Header extends Component {
  state = {
    todoName: ""
  }

  inpValueFn = (e) => {
    this.setState({ todoName: e.target.value.trim() })//实时改变this.state中的todoName的值//并且实时去左右空格
  }

  keyUpFn = (e) => {
    // let { todoName } = this.state
    if (e.keyCode === 13 && this.state.todoName !== '') {

      this.props.fn(this.state.todoName)
      this.setState({ todoName: '' })
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
