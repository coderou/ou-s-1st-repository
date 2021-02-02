import React, { Component } from 'react'
import './Item.css'
export default class Item extends Component {
  handle = (id) => (e) => {
    //要修改的是app组件中list中某个数据的isDone的值
    // 将要修改的辣条数据id传递给app
    const { getTodoIdUpdate } = this.props//不管哪个函数写这个代码,只要可以访问this.props,就可以解构
    getTodoIdUpdate(id)
  }

  delHandel = () => {
    let { getTodoIdDelete, todo } = this.props//如果不用柯里化函数,这里需要拿到props的todo的id,毕竟下面render函数中的todo这里读取不到,除非用柯里化传递进来,但是柯里化闭包问题尽量能不用就能不用
    getTodoIdDelete(todo.id)
  }
  render() {
    // const { fn } = this.props
    // const { fn2 } = this.props
    const { todo } = this.props

    return (
      <li>
        <label>
          <input type="checkbox" checked={todo.isDone} onChange={this.handle(todo.id)} />
          <span className={todo.isDone ? 'done' : ''}>{todo.todoName}</span>
        </label>
        <button className="btn btn-danger" onClick={this.delHandel}  >删除</button>
      </li>
    )
  }
}
