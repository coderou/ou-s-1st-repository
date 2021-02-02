import React, { Component } from 'react'
import CatUrl from '../assets/cat.gif'

export default class Cat extends Component {
  render() {
    let { x, y } = this.props.children.state
    // console.log(this.props.children)
    // console.log(x,y)
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
