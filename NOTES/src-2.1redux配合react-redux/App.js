import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './redux/store'
import Count from './Count'
import Demo from './Demo.js'

export default class App extends Component {
  /* componentDidMount() {
    store.subscribe(() => {
      console.log('数据更新了')
      console.log(store.getState().count)
      this.a = store.getState().count
      // this.forceUpdate()
      // this.setState({})
    })
  }

  handle = () => {
    //修改redux的数据
    store.dispatch({ type: 'INCREMENT', data: 1 })

  } */

  render() {
    return (
      // 一个react应用这个Provider只需要写一次
      <Provider store={store}>
        <div>
          <Count></Count>
          <Demo></Demo>
          {/* <div>{store.getState().count}</div>
          <button onClick={this.handle}>按钮+1</button> */}
        </div>
      </Provider>
    )
  }
}
