import React, { Component } from 'react'


import './Item.css'
export default class Item extends Component {
  render() {
    /* this.list = Pubsub.subscribe('list', (msg, data) => {//尝试过写在render生命周期函数或者cdm生命周期函数,但是始终只执行一次,所以Pubsub组件并不是随时都用的,而是需要跨组件传递单纯数据才用,这种传递的数据用props或者context其实更好//充分说明第三库也是有局限性的,并不通用,否则就把原生react方法全干掉了
      console.log(data)
      this.setState({ list: data })
    }) */
    console.log(this.props)
    const { todoName } = this.props.children[0]
    return (
      <li>
        <label>
          <input type="checkbox" />
          <span>{todoName}</span>
          <span>{this.props.children[1]}</span>
        </label>
        <button className="btn btn-danger">删除</button>
      </li>
    )
  }
}
