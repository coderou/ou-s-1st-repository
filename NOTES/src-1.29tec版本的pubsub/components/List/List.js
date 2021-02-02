import React, { Component } from 'react'
import Item from '../Item/Item'
import './List.css'
export default class List extends Component {
  render() {
    // 注意: this.props.children是List组件使用时,子节点位置的内容
    // console.log(this.props.children)
    return <ul className="todo-main">{this.props.children}</ul>
  }
}
