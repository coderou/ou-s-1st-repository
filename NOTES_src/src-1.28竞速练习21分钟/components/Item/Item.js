import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
import './Item.css'

export default class Item extends Component {
  changeIsDone = () => {
    Pubsub.publish('changeIsDone', this.props.children.id)
  }
  deleteOne=()=>{
    Pubsub.publish('deleteOne', this.props.children.id)
  }
  render() {
    return (
      <li>
        <label>
          <input type="checkbox" checked={this.props.children.isDone} onChange={this.changeIsDone} />
          <span className={this.props.children.isDone ? 'done' : ''}>{this.props.children.todoName}</span>
        </label>
        <button className="btn btn-danger" onClick={this.deleteOne} >删除</button>
      </li >
    )
  }
}
