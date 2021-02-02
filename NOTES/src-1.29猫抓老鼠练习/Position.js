import React, { Component } from 'react'

export default class Position extends Component {
  state = {
    x: 0,
    y: 0
  }

  handleMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }
  componentDidMount() {
    window.addEventListener('mousemove', this.handleMove)
  }
  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMove)
  }

  render() {
    // 写法1:
    // return this.props.render(this.state)
    // 写法2:
    return (this.props.children(this.state))
  }
}