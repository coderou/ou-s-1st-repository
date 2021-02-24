import React, { Component } from 'react'

export default function withForm(WrappedComponent) {//导出函数
  return class extends React.Component {//返回的类
    state = {//公共状态
      username: '',//用户名
      password: '',//密码
      repassword: ''//确认密码
    }
    handle = (name) => (e) => {//公共逻辑
      this.setState({ [name]: e.target.value })
    }
    render() {
      return (//返回改组件实例
        <WrappedComponent {...this.state} handle={this.handle}></WrappedComponent>
      )
    }

  }
}