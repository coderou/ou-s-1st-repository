import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    const { fn } = this.props
    const { fn2 } = this.props
    const { list } = this.props
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
          <input type="checkbox" checked={n === list.length ? true : false} onChange={fn} />
        </label>
        <span>
          <span>已完成{n}</span> / 全部{list.length}
        </span>
        <button className="btn btn-danger" onClick={fn2} >清除已完成任务</button>
      </div>
    )
  }
}
