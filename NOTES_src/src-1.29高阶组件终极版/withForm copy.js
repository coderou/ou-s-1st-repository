import React, { Component } from 'react'

export default function withForm(YourComponentName) {
  return class extends Component {
    // 提取公共属性
    state = { username: '', password: '', repassword: '' }
    // 提取公共方法
    handle = (name) => (e) => {
      this.setState({ [name]: e.target.value })
    }
    render() {
      return <YourComponentName {...this.props}{...this.state} handle={this.handle}></YourComponentName>
    }
  }
}
