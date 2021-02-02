import React, { Component } from 'react'

export default class Test extends Component {
  shouldComponentUpdate() {
    return false
  }
  render() {
    console.log('Test组件更新了')
    return (
      <div>Test组件</div>
    )
  }
}
