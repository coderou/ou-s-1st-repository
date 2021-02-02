import React, { Component } from 'react'

export default class Position extends Component {
  state = {
    x: 0,
    y: 0
  }

  handle = (e) => {//更新数据的函数
    this.setState({ x: e.clientX, y: e.clientY })
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handle)
  }
  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handle)
  }


  render() {
    // return this.props.render(this.state)//方法1
    return this.props.children(this.state)//方法2
  }
}
