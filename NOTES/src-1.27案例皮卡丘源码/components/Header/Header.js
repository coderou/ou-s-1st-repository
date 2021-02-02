import React, { Component } from 'react'
import './Header.css'
export default class Header extends Component {
  state = {
    todoName: '',
  }
  handle = (e) => {
    this.setState({
      todoName: e.target.value.trim(),
    })
  }

  // 监听键盘事件的处理函数
  keyUpHandle = (e) => {
    let { todoName } = this.state
    // 表示按下回车键
    if (e.keyCode === 13 && todoName !== '') {
      //将用户输入结果,插入到todolist这个数组中
      this.props.fn(this.state.todoName)
      this.setState({
        todoName: '',
      })
    }
  }
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
          value={this.state.todoName}
          onChange={this.handle}
          onKeyUp={this.keyUpHandle}
        />
      </div>
    )
  }
}
