import React, { Component } from 'react'
// 这个Test,没有用到任何的父组件或其他外部的数据,所以后面都不再重复的更新了
export default class Test extends Component {
  shouldComponentUpdate() {
    return false
  }
  render() {
    console.log('Test更新了')
    return <div>Test组件</div>
  }
}
