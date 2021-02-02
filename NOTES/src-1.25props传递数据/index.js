// 入口文件
// 引入react, 引入reactDom

import React from 'react'
import ReactDOM from 'react-dom'

// 引入根组件
import App from './App'
// <App /> 就相当于是new App()
// console.log(App)
// console.log(<App />)
ReactDOM.render(<App />, document.getElementById('root'))
