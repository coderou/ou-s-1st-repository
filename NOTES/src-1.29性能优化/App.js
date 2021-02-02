import React, { Component } from 'react'
import Test from './Test'
import Demo from './Demo'
export default class App extends Component {
  state = {
    count: 0
  }
  render() {
    return (
      <>
        <button onClick={
          () => { this.setState({ count: this.state.count + 1 }) }
        }>溜溜球</button>
        <h3>hello</h3>
        <p>world</p>
        <p>{this.state.count}</p>
        <Test></Test>
        <Demo count={this.state.count}></Demo>
      </>
    )
  }
}
