import React, { Component } from 'react'
import context from './context'
export default class Test extends Component {
  static contextType = context
  render() {
    return (
      <div>
        Test组件,{this.context}
      </div>
    )
  }
}
