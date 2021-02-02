import React, { Component } from 'react'
import Cat from './components/Cat'
import Mouse from './components/Mouse'
import Position from './Position'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>猫抓老鼠</h1>
        {/* <Position render={(state) => { return <Mouse {...state}></Mouse> }}></Position>
        <Position render={(state) => { return <Cat {...state}></Cat> }}></Position> */}
        <Position>{data => { return <Cat state={data}></Cat> }}</Position>
        <Position>{data => { return <Mouse state={data}></Mouse> }}</Position>

      </div>
    )
  }
}
