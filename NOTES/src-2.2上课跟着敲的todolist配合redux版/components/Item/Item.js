import React, { Component } from 'react'
import './Item.css'
export default class Item extends Component {
  updateHandle = () => {
    let { todo } = this.props
    this.props.updataTodo(todo.id)
  }
  /* shouldComponentUpdate() {
    return true
  } */
  deleteHandle = () => {
    let { todo } = this.props
    this.props.deleteTodo(todo.id)
  }
  render() {
    let { todo } = this.props
    return (
      <li>
        <label>
          <input
            type="checkbox"
            checked={todo.isDone}
            onChange={this.updateHandle} />
          <span className={todo.isDone ? 'done' : ''}>{todo.todoName}</span>
        </label>
        <button className="btn btn-danger" onClick={this.deleteHandle}>删除</button>
      </li>
    )
  }
}
