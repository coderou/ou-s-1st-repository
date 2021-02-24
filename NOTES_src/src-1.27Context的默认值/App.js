import React, { Component } from 'react'
import Far from './Far'
import context from './context'

// const { Provider } = context

export default class App extends Component {
  state = { msg: '五毛钱' }



  render() {
    return (
      // <context.Provider value={this.state.msg}>
        <div>
          <Far />
        </div>
      // </context.Provider>
    )
  }
}
