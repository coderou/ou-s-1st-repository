import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    // console.log(this.props);
    let done = 0
    this.props.list.forEach(i => {
      if (i.isDone === true) {
        done++
      }
    })
    let all = this.props.list.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox"
          checked={done===all}
          onChange={this.props.selectAll}
          />
        </label>
        <span>
          <span>已完成 {done}</span> /全部{all}
        </span>
        <button className="btn btn-danger" onClick={this.props.deleteSome} >清除已完成任务</button>
      </div>
    )
  }
}
