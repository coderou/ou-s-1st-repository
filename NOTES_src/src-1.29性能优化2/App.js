import React, { Component } from 'react'
import Test from './Test'
import Demo from './Demo'
export default class App extends Component {
  state = {
    count: 0,
  }
  render() {
    console.log('app更新了')
    return (
      <>
        <button
          onClick={() => {
            function getRandomIntInclusive(min, max) {
              min = Math.ceil(min)
              max = Math.floor(max)
              return Math.floor(Math.random() * (max - min + 1)) + min //含最大值，含最小值
            }

            this.setState({
              count: getRandomIntInclusive(1, 2),
            })
          }}
        >
          按钮
        </button>
        <h3>hello </h3>
        <p>react</p>
        <p>{this.state.count}</p>
        <Test></Test>
        <Demo count={this.state.count} ></Demo>
      </>
    )
  }
}
