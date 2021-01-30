import React, { Component } from 'react'
import CatUrl from '../assets/cat.gif'

export default class Cat extends Component {
  state = {
    x: 0,
    y: 0
  }

  componentDidMount() {
    window.onmousemove = e => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      })
    }
  }

  componentWillUnmount() {
    window.onmousemove = null
  }

  render() {
    let { x, y } = this.state
    x += 200
    y -= 50
    return (
      <div>
        <img
          src={CatUrl}
          alt=''
          style={{ position: 'absolute', left: x, top: y }}
        />
      </div>
    )
  }
}
