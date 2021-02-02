import React, { Component } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import withForm from './withForm'

const WithLogin = withForm(Login)
const WithRegister = withForm(Register)

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>高阶组件</h1>
        <WithLogin></WithLogin>
        <WithRegister></WithRegister>
      </div>
    )
  }
}
