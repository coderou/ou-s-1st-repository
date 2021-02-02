import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
  state = {
    todoName: ''
  }
  fn = (e) => {
    this.setState({
      todoName: e.target.value
    })
  }
  //监听键盘事件的处理函数
  keyUpFn = (e) => {
    // 表示按下回车键
    console.log(1)
    console.log(e.keyCode)
    if (e.keyCode === 13) {
      // 将用户输入的结果插入到todoList里面
      console.log(2)
      console.log(e.keyCode)
      this.props.fn(this.state.todoName)
    }
  }

  render() {
    // const { fn } = this.props
    return (
      <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" value={this.state.todoName} onChange={this.fn} onKeyUp={this.keyUpFn} />
      </div>
    )
  }
}
