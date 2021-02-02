import React, { Component } from 'react'
import './Header.css'
import Pubsub from 'pubsub-js'
export default class Header extends Component {
  state = {
    todoName: '',
  }

  handle = (e) => {
    this.setState({
      todoName: e.target.value.trim(),
    })
  }

  keyUp = (e) => {
    if (e.keyCode === 13 && this.state.todoName !== '') {
      Pubsub.publish('add', this.state.todoName)
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
          value={this.state.todoName}
          placeholder="请输入你的任务名称，按回车键确认"
          onChange={this.handle}
          onKeyUp={this.keyUp}
        />
      </div>
    )
  }
}
