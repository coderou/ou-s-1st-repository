import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
export default class Test extends Component {

  componentDidMount() {
    // 注意:组件挂载成功了,才去订阅
    // msg:其实就是话题
    // data:才是真正要拿的数据
    Pubsub.subscribe('money', (msg, data) => {//不知道什么时候接收到,所以用异步,回调会不会阻塞代码执行
      console.log(msg)//'money'
      console.log(data)//'五毛钱'
    })
    Pubsub.subscribe('thank', (msg, data) => {
      console.log(msg)//'thank'
      console.log(data)//'谢谢孙子'
    })
  }
  render() {
    return (
      <div>
        Test组件
      </div>
    )
  }
}
