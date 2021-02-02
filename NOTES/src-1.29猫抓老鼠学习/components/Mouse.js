import React, { Component } from 'react'
import MouseUrl from '../assets/mouse.gif'

export default class Mouse extends Component {
  /* state = {
    x: 0,
    y: 0
  } */

  /* handleMove = e => {
    // console.log(e)
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  } */

  /* componentDidMount() {
    window.addEventListener('mousemove', this.handleMove)
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMove)
  } */

  render() {
    let { x, y } = this.props.state//这里就不需要自身的了,直接用传递进来的state的属性
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
