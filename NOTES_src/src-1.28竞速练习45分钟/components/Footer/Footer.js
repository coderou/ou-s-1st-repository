import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
import './Footer.css'

export default class Footer extends Component {
  selectAll = (e) => {
    Pubsub.publish('selectAll', e)
  }
  deleteSome = () => {
    Pubsub.publish('deleteSome')
  }
  render() {
    let done = 0
    this.props.children.forEach(i => {
      if (i.isDone) { done++ }
    })
    let all = this.props.children.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={all === done} onChange={this.selectAll} />
        </label>
        <span>
          <span>已完成 {done}</span> / 全部{all}
        </span>
        <button className="btn btn-danger" onClick={this.deleteSome} >清除已完成任务</button>
      </div>
    )
  }
}
