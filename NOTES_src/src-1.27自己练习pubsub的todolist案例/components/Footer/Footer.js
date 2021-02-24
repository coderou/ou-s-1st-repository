import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
import './Footer.css'
export default class Footer extends Component {

  selectAll = (e) => [
    Pubsub.publish('selectAll', e)
  ]
  deleteSome = (e) => {
    Pubsub.publish('deleteSome', e)
  }

  render() {
    const all = this.props.children.length//拿到总共的任务数量
    let done = 0
    this.props.children.forEach((i) => {
      if (i.isDone === true) {
        done++
      }
    })

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={done === all} onChange={this.selectAll} />
        </label>
        <span>
          <span>已完成 {done}</span> / 全部{all}
        </span>
        <button className="btn btn-danger" onClick={this.deleteSome}>清除已完成任务</button>
      </div>
    )
  }
}
