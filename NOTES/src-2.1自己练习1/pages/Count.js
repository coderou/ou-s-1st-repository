import React, { Component } from 'react'

export default class Count extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={
          () => { this.props.increment(1) }
        }>点击加1</button>
        <button onClick={
          () => { this.props.decrement(2) }
        }>点击减2</button>
      </div>
    )
  }
}
