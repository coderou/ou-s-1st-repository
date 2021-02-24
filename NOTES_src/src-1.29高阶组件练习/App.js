import React, { Component } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import withForm from './withForm'//导入高阶组件函数

const WithRegister = withForm(Register)//返回高阶函数包装后的"注册类组件"
const WithLogin = withForm(Login)//返回高阶函数包装后的"登录类组件"
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>高阶组件</h1>
        <WithLogin ></WithLogin>
        <WithRegister></WithRegister>
      </div>
    )
  }
}
