import React, { Component } from 'react'
import MouseUrl from '../assets/mouse.gif'

export default class Mouse extends Component {
  state = {
    x: 0,
    y: 0
  }

  handleMove = e => {
    // console.log(e)
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
    let { x, y } = this.state
    return (
      <div>
        <img
          src={MouseUrl}
          alt=''
          style={{ position: 'absolute', left: x, top: y, width: 100 }}
        />
      </div>
    )
  }
}
