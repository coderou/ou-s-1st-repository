import React, { Component } from 'react'
import Item from '../Item/Item'
import './List.css'
export default class List extends Component {
  render() {
    const { list } = this.props//获取到App组件传递过来的数据
    return (//返回一个reactDOM,用列表进行渲染,并且添加自己独立的key值提升性能
      <ul className="todo-main">
        {list.map((i) => {
          console.log(i)
          return <Item key={i.id} todo={i} />
        })}
      </ul>
    )
  }
}
