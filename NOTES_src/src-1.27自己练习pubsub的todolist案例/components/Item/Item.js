import React, { Component } from 'react'
import Pubsub from 'pubsub-js'

import './Item.css'
export default class Item extends Component {
  changeIsDone = () => {
    const { id } = this.props.children[0]//这里因为不想使用柯里化函数,直接拿this.props.children的id,因为每个Item在被App中代码渲染的时候,都是独一无二的,所以他的id也是对应的
    Pubsub.publish('changeIsDone', id)//发送订阅
  }

  deleteOne = () => {
    const { id } = this.props.children[0]
    Pubsub.publish('deleteOne', id)//发送订阅
  }


  render() {
    /* this.list = Pubsub.subscribe('list', (msg, data) => {//尝试过写在render生命周期函数或者cdm生命周期函数,但是始终只执行一次,所以Pubsub组件并不是随时都用的,而是需要跨组件传递单纯数据才用,这种传递的数据用props或者context其实更好//充分说明第三库也是有局限性的,并不通用,否则就把原生react方法全干掉了
      console.log(data)
      this.setState({ list: data })
    }) */
    // console.log(this.props)//这个函数会渲染3次,因为app中map了3次
    const { isDone, todoName } = this.props.children[0]//解构赋值在app.js中通过props.children传递过来的对象
    return (
      <li>
        <label>
          <input type="checkbox" checked={isDone} onChange={this.changeIsDone} />
          <span className={isDone ? 'done' : ''}>{todoName}</span>
          {/* <span>{this.props.children[1]}</span> */}
        </label>
        <button className="btn btn-danger" onClick={this.deleteOne}>删除</button>
      </li>
    )
  }
}
