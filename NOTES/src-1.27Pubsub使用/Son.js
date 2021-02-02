import React, { Component } from 'react'
import Pubsub from 'pubsub-js'

export default class Son extends Component {
  componentDidMount() {
    this.token = Pubsub.subscribe('money', (msg, data) => {
      console.log(msg)
      console.log(data)
    })
  }
  fn = () => {
    Pubsub.publish('thank', '谢谢孙子')
  }
  f2 = () => {
    Pubsub.unsubscribe(this.token)
    console.log('取消son的money订阅')
  }

  render() {
    return (
      <div>
        孙子
        <button onClick={this.fn}>孙子按钮thank</button>
        <button onClick={this.fn2}>取消son组件订阅的话题money</button>
      </div>

    )
  }
}
