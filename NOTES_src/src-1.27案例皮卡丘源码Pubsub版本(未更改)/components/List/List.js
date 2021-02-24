import React, { Component } from 'react'
import Item from '../Item/Item'
import './List.css'
export default class List extends Component {
  render() {
    const { list,getTodoIdUpdate,getTodoIdDelete } = this.props
    return (
      <ul className="todo-main">
        {list.map((item) => {
          return <Item key={item.id} todo={item} getTodoIdUpdate={getTodoIdUpdate} getTodoIdDelete={getTodoIdDelete}></Item>
        })}
      </ul>
    )
  }
}
