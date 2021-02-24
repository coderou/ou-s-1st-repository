// 高阶组件技巧:要求我们定义一个函数
// 注意:接收的是一个组件,在后面的代码中,也要直接当做组件去使用,所以定义的时候,首字母要大写
import React from 'react'
export default function withForm(WrappedComponent) {
  // 要求调用这个函数的时候,返回的是一个新组件,这个组件其实就是一个父组件
  // 因为不需要关心这个组件的名字,所以可以定义一个黎明组件
  return class extends React.Component {
    // 这个组件中,定义公共的状态和公共的逻辑
    // 在这个组件中定义所有子组件需要用到的状态
    state = {
      username: '',
      password: '',
      repassword: '',
    }

    // 如果还有公共的逻辑,把逻辑也定义出来
    handle = (name) => (e) => {
      this.setState({ [name]: e.target.value })
    }

    render() {
      // 这个组件中,要渲染的其实就是需要公共状态和公共逻辑的组件
      // 也就是调用withForm时候传进来的
      return (<WrappedComponent {...this.state} handle={this.handle}></WrappedComponent>)
    }
  }
}