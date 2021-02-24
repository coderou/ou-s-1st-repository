import React from 'react'//导入react核心
import H1 from './components/h1'
import P1 from './components/p1'
import Test from './components/test'
class App extends React.Component {//必须继承自React.Component
  constructor() {
    super()
    this.state = {
      count: 1,
      name: '奥威'
    }
  }

  render() {//必须写render函数
    return (//必须写返回值
      <div id='app'>
        <h1>{this.state.count}</h1>
        <h1>{this.state.name}</h1>
        <button onClick={() => {
          // this.state.count++//直接更改state(无法更新视图)
          this.setState({ count: this.state.count + 1 })//通过实例对象的setState方法更改state(可更新视图)
        }}>按钮</button>
        <H1 />
        <P1></P1>
        {/* <Test list={[1,2,3,4]} /> 类组件传递参数 */}
        <Test />
      </div >
    )
  }
}

/* class App2 extends React.compnent {
  constructor() {
    super()
    this.state = {
      count: 1
    }
  }

  render() {
    return (<div>
      <h1>{this.state.count}</h1>
      <button onClick={() => {
        this.setState({ count: this.state.count + 1 })
      }}>点击</button>
    </div>)
  }

} */

export default App//导出App


