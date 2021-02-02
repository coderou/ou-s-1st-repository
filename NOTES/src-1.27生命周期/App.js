import React, { Component } from 'react'
import Test from './Test'
export default class App extends Component {
  constructor() {
    super()
    console.log('挂载阶段', '构造器')
    this.state = {
      count: 0
    }
  }
  render() {
    console.log('挂载/更新', 'render')
    return <div>App组件{this.state.count}
      <button onClick={() => { this.setState({ count: 1 }) }} >按钮</button>
      {this.state.count === 0 && <Test />}
      {/* 写了,就是挂载了,不写了,就是卸载了 */}
      {/* 组件的生命周期中,挂载为1次,卸载为1次,渲染为1+n次 */}
    </div>
  }
  componentDidMount() {//cdm
    console.log('挂载阶段', 'cdm')
  }
  componentDidUpdate(prevProps, prevState) {//cdu
    console.log('更新阶段', 'cdu')
  }
}
