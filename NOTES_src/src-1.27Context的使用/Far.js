import React, { Component } from 'react'
import Son from './Son'
import Test from './Test'

export default class Far extends Component {
  render() {
    return (
      <div>
        父亲
        <Son />
        <Test />
      </div>
    )
  }
}
