import React, { Component } from 'react'

export default class Register extends Component {
  render() {
    const { username, password, repassword, handle } = this.props
    return (
      <div>
        <h1>注册</h1>
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
          确认密码:
          <input
            type="password"
            value={repassword}
            onChange={handle('repassword')}
          />
          <input type="button" value="注册" />
        </form>
      </div>
    )
  }
}
