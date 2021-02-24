import React, { Component } from 'react'//导入react Component
import { connect } from 'react-redux'// 导入connect连接器

class Count extends Component {//定义一个count组件
  render() {//渲染函数
    return (
      <div>
        {/* 这个是根据数据随动的属性 */}
        <div>{this.props.count}</div>
        <div>{this.props.name}</div>
        <button onClick={() => {
          this.props.dispatch({ type: 'INCREMENT', data: 1 })//点击按钮,触发下面connect高阶函数组件绑定在改实例props上的dispatch函数,触发action改变store的state
        }}>按钮,点击加1</button>
      </div>
    )
  }
}
function mapStateToProps(state) {//映射state数据到props的函数,传入state
  return {//返回一个对象,改对象经过connect的处理,被绑定在了改实例的props上,可动态获取
    count: state.count,
    name: state.msg
  }
}
export default connect(mapStateToProps)(Count)//使用react-redux的connect高阶函数进行绑定,绑定参数1:一个函数,该函数作用为映射state数据到props上,参数2为目标实例

