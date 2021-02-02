import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    const { username, password, handle ,number} = this.props
    return (
      <div>
        <h1>登录</h1>
        <form>
          用户名:
          <input type="text" value={username} onChange={handle('username')} />
          <br />
          密码:
          <input
            type="password"
            value={password}
            onChange={handle('password')}
          />
          <br />
          <input type="button" value="登录" />
        </form>
      </div>
    )
  }
}
