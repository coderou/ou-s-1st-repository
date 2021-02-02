import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
import './Footer.css'

export default class Footer extends Component {
  changeAll = (e) => {
    Pubsub.publish('changeAll', e.target.checked)
  }
  deleteSome = () => {
    Pubsub.publish('deleteSome')
  }
  render() {
    let done = 0
    this.props.children.forEach(i => {
      if (i.isDone === true) {
        done++
      }
    })
    let all = this.props.children.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox"
            checked={done === all}
            onChange={this.changeAll}
          />
        </label>
        <span>
          <span>已完成 {done}</span> / 全部{all}
        </span>
        <button className="btn btn-danger" onClick={this.deleteSome} >清除已完成任务</button>
      </div>
    )
  }
}
