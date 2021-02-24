import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
import './Header.css'

export default class Header extends Component {
  state = {
    info: ''
  }
  changeValue = (e) => {
    this.setState({ info: e.target.value.trim() })
  }
  addOne = (e) => {
    if (e.keyCode === 13 && e.target.value !== '') {
      Pubsub.publish('addOne', this.state.info)
      this.setState({ info: '' })
    }
  }
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
          value={this.state.info}
          onChange={this.changeValue}
          onKeyUp={this.addOne}
        />
      </div>
    )
  }
}
