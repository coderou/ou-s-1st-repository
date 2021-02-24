import React, { Component } from 'react'
import Item from '../Item/Item'
import './List.css'
export default class List extends Component {
  render() {
    const { list } = this.props
    const { getTodoIdUpdate } = this.props

    return (
      <ul className="todo-main">
        {list.map(i => {
          // console.log(i)
          return <Item key={i.id} getTodoIdDelete={this.props.getTodoIdDelete} getTodoIdUpdate={getTodoIdUpdate} todo={i} fn={this.props.fn} fn2={this.props.fn2} />
        })}
      </ul>
    )
  }
}
