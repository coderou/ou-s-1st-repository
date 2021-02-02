import React, { Component } from 'react'

export default class Position extends Component {
  state = {
    x: 0,
    y: 0
  }

  handleMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    })
  }


  componentDidMount() {
    window.addEventListener('mousemove', this.handleMove)//这里要写有名字的函数而不是箭头函数因为下面组件卸载要干掉事件
  }
  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMove)
  }



  render() {
    return this.props.render(this.state)
  }
}
