import React, { Component } from 'react'

export default class Count extends Component {
  render() {
    return (
      <div>
        <div>{this.props.count}</div>
        <button onClick={() => { this.props.increment(1) }}>点击加1</button>
      </div>
    )
  }
}
