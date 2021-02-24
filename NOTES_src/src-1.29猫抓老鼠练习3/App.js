import React, { Component } from 'react'
import Cat from './components/Cat'
import Mouse from './components/Mouse'
import Position from './Position'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>猫抓老鼠</h1>
        {/* 方法1:通过props属性传递函数进去 */}
        {/* <Position render={state => { return <Cat {...state}></Cat> }}></Position>
        <Position render={state => { return <Mouse {...state}></Mouse> }}></Position> */}
        {/* 方法2:通过children方式传递进去 */}
        <Position>{data => { return <Cat {...data}></Cat> }}</Position>
        <Position>{data => { return <Mouse {...data}></Mouse> }}</Position>
      </div>
    )
  }
}
