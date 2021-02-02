import React, { Component } from 'react'
import context from './context'

const { Consumer } = context

export default class Son extends Component {
  render() {
    return (<Consumer>
      {data => <div>孙子,{data}</div>}
    </Consumer>)
  }
}
