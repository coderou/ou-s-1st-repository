import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        Home
        <button onClick={()=>[
          this.props.history.replace('/login',{from:'/home'})
        ]}>去首页</button>
      </div>
    )
  }
}
