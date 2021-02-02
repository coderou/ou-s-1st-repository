import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
import './Footer.css'
export default class Footer extends Component {
  checkHandle = () => {
    // 如果有一个不选中,点击全选之后,所有都选中
    // 如果都选中了,点击全选就都不选中

    const { list } = this.props
    const res = list.every((item) => {
      return item.isDone
    })

    let newList = [...list]
    newList.forEach((item) => {
      item.isDone = !res
    })

    Pubsub.publish('allCheck', newList)
  }

  clearAllDonesHandle = () => {
     Pubsub.publish('clearAllDone', null)
  }
  render() {
    const { list } = this.props
    const total = list.length
    let doneTotal = 0
    list.forEach((item) => {
      if (item.isDone) {
        doneTotal++
      }
    })

    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={doneTotal === total}
            onChange={this.checkHandle}
          />
        </label>
        <span>
          <span>已完成 {doneTotal}</span> / 全部 {total}
        </span>
        <button className="btn btn-danger" onClick={this.clearAllDonesHandle}>清除已完成任务</button>
      </div>
    )
  }
}
