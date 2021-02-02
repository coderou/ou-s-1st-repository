import React, { Component } from 'react'//导入react创建component组件
import { Provider } from 'react-redux'//导入Provider包裹App根组件

import store from './redux/store'//导入store应用于Provider
import Count from './container/CountContainer'//用容器组件包装后的Count

export default class App extends Component {//导出App
  render() {//render函数
    return (//返回一个jsx,以下Provider是一个固定写法
      <Provider store={store}>
        <Count></Count>
      </Provider>
    )
  }
}
