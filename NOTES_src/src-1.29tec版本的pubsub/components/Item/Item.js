import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
import './Item.css'
export default class Item extends Component {
  updateHandle = () => {
    //发布
    Pubsub.publish('update', this.props.item.id)
  }
  delHandle = () => {
    //发布
    Pubsub.publish('delete', this.props.item.id)
  }

  render() {
    const { item } = this.props
    return (
      <li>
        <label>
          <input
            type="checkbox"
            checked={item.isDone}
            onChange={this.updateHandle}
          />
          <span className={item.isDone ? 'done' : ''}>{item.todoName}</span>
        </label>
        <button className="btn btn-danger" onClick={this.delHandle}>
          删除
        </button>
      </li>
    )
  }
}
