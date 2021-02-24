import React, { Component } from 'react'
import Item from '../../container/ItemContainer'
import './List.css'
export default class List extends Component {
  render() {
    let { list } = this.props
    return (
      <ul className="todo-main">
        {list.map(i => (<Item key={i.id} todo={i}></Item>))}
      </ul>
    )
  }
}
