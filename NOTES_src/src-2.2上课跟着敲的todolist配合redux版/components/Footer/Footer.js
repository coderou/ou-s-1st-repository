import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
  updataAllTodos = () => {
    // 如果有一个不选中,点击全选就都选中,如果全选,点击全选,就都不选中
    let { list } = this.props
    const res = list.every(i => i.isDone)
    this.props.checkTodos(res)
  }
  render() {
    let { list } = this.props
    let doneTotal = 0
    list.forEach(i => {
      if (i.isDone) doneTotal++
    })
    let allTotal = list.length

    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={doneTotal === allTotal}
            onChange={this.updataAllTodos}
          />
        </label>
        <span>
          <span>已完成 {doneTotal}</span> / 全部 {allTotal}
        </span>
        <button className="btn btn-danger" onClick={() => { this.props.deldoneTodos() }}>清除已完成任务</button>
      </div>
    )
  }
}

