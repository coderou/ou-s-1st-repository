// 高阶组件技巧:要求我们定义一个函数
// 注意: 接收的是一个组件,在后面的代码中,也要直接当做组件去使用.所以定义的时候,首字母要大小
import React from 'react'
export default function withForm(WrappedComponent) {
  // 要求调用这个函数的时候,返回一个新的组件.这个组件其实就是一个父组件
  // 因为这里不关心这个组件的名字,所以可以定义一个匿名组件
  return class extends React.Component {
    // 给每一个实例一个单独的名字,这样便于区分
    static displayName = 'with' + WrappedComponent.name
    // 这个组件中,定义公共的状态和公共的逻辑
    // 这个组件中,定义所有子组件中需要用到的状态
    state = {
      username: '',
      password: '',
      repassword: '',
    }
    //如果还有公共的逻辑,把逻辑也定义出来
    handle = (name) => (e) => {
      this.setState({
        [name]: e.target.value,
      })
    }

    render() {
      // 这个组件中,要渲染的其实就是需要公共状态和公共逻辑的组件
      // 也就是调用withForm时,传入的那个组件
      //同时结构props便于app通过props方式传递数据给login等组件而不是改高阶函数封装组件
      return <WrappedComponent {...this.state} {...this.props} handle={this.handle} />
    }
  }
}
