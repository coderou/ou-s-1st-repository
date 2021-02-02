import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
  render() {
    let { allDoneTodos, allTodos } = this.props
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={allTodos === allDoneTodos}
            onChange={this.props.updateAllTodos}
          />
        </label>
        <span>
          <span>已完成 {allDoneTodos}</span> / 全部 {allTodos}
        </span>
        <button className="btn btn-danger" onClick={this.props.delAllDoneTodos}>
          清除已完成任务
        </button>
      </div>
    )
  }
}
