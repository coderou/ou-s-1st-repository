import React, { Component } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'

import withForm from './withForm'

const WithLogin = withForm(Login)
const WithRegister = withForm(Register)

class App extends Component {
  render() {
    return (
      <div>
        <h1>高阶组件</h1>
        <WithLogin number={0} />
        <WithRegister />
      </div>
    )
  }
}
// react devTools 这个调试工具,展示组件名的时候,默认先读取组件的静态属性displayName,如果有,就展示displayName.如果没有就展示静态属性name的值. 默认组件的名称就是name的值.
console.log(App.name)//App
console.log(App.displayName)//undefined
App.displayName = 'coderou'//此时,调试工具已经改变组件名为coderou


export default App
