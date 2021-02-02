import React, { Component } from 'react'
import './Item.css'
export default class Item extends Component {
  //修改任务
  handle = (id) => (e) => {
    // 要修改的是app组件的中list中某个数据的isDone的值
    // 将要修改的那条数据的id,传给app
    const { getTodoIdUpdate } = this.props
    getTodoIdUpdate(id)
  }
  //删除任务
  delHandel = () => {
    let { getTodoIdDelete, todo } = this.props
    getTodoIdDelete(todo.id)
  }
  render() {
    const { todo } = this.props
    return (
      <li>
        <label>
          <input
            type="checkbox"
            checked={todo.isDone}
            onChange={this.handle(todo.id)}
          />
          <span className={todo.isDone ? 'done' : ''}>{todo.todoName}</span>
        </label>
        <button className="btn btn-danger" onClick={this.delHandel}>
          删除
        </button>
      </li>
    )
  }
}
