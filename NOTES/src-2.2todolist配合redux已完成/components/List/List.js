import React, { Component } from 'react'
import Item from '../Item/Item'
import './List.css'

export default class List extends Component {
  render() {
    // console.log(this.props)
    return (
      <ul className="todo-main">
        <h3>任务列表</h3>
        {this.props.list.length > 0 ? this.props.list.map(i => {
          return <Item key={i.id}
            changeIsDone={this.props.changeIsDone}
            deleteOne={this.props.deleteOne}>{i}</Item>
        }) : <h3>没有数据</h3>}
      </ul>)

  }
}
