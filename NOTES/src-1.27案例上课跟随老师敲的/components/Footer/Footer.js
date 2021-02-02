import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    // const { fn } = this.props
    // const { fn2 } = this.props
    const { list } = this.props
    let { allTodos, allDoneTodos } = this.props
    let n = 0
    list.forEach(i => {
      if (i.isDone === true) {
        n = n + 1
      }
    })
    // let res = { n, length: list.length }
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={allTodos === allDoneTodos} onChange={this.props.updateAllTodos} />
        </label>
        <span>
          <span>已完成{allDoneTodos}</span> / 全部{allTodos}
        </span>
        <button className="btn btn-danger" onClick={this.props.delAllDoneTodos} >清除已完成任务</button>
      </div>
    )
  }
}
