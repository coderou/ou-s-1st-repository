import React, { Component } from 'react'

export default class Count extends Component {
  render() {
    return (
      <div>
        <div>{this.props.count}</div>
        <div>{this.props.name}</div>
        <button onClick={() => {
          this.props.increment(1)
        }}>点击加5</button>

        <button onClick={() => {
          this.props.increment(5)
        }}>点击加5</button>

      </div>
    )
  }
}


