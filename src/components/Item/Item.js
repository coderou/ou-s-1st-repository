import React, { Component } from 'react'
import './Item.css'
export default class Item extends Component {
  render() {
    const { fn } = this.props
    const { fn2 } = this.props
    const { todo } = this.props
    return (
      <li>
        <label>
          <input type="checkbox" checked={todo.isDone} onChange={fn(todo.id)} />
          <span className={todo.isDone ? 'done' : ''}>{todo.todoName}</span>
        </label>
        <button className="btn btn-danger" onClick={fn2(todo.id)}>删除</button>
      </li>
    )
  }
}
