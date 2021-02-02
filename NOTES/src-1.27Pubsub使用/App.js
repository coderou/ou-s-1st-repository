import React, { Component } from 'react'
import Far from './Far'
import Pubsub from 'pubsub-js'

export default class App extends Component {
  state = { msg: '五毛钱' }
  // 发布数据事件的处理函数
  handle = () => {
    Pubsub.publish('money', this.state.msg)//参数1:话题(其实就是订阅者和发布者简历关系的一个标识/关键字),参数2:数据
  }

  //取消置顶话题
  handle1 = () => {
    Pubsub.subscribe('thank')
    console.log("取消thank成功")
  }
  // 取消所有话题
  handle2 = () => {
    Pubsub.clearAllSubscriptions()
    console.log('取消所有话题')
  }

  render() {
    return (
      <div>
        <button onClick={this.handle}>按钮money</button>
        <button onClick={this.handle1}>取消指定话题</button>
        <button onClick={this.handle2}>取消所有话题</button>
        <Far />
      </div>
    )
  }
}
