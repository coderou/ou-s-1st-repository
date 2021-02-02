import React, { Component } from 'react'//导入react Component
import { connect } from 'react-redux'// 导入connect连接器
import { increment, decrement } from './redux/actions'//导入actions中统一封装的函数increment用于相加

class Count extends Component {//定义一个count组件
  render() {//渲染函数
    return (
      <div>
        {/* 这个是根据数据随动的属性 */}
        <div>{this.props.count}</div>
        <div>{this.props.name}</div>

        <button onClick={() => {
          this.props.dispatch(increment(1))//点击按钮,触发下面connect高阶函数组件绑定在改实例props上的dispatch函数,触发action改变store的state
        }}>点击加1</button>

        <button onClick={() => {
          this.props.incre(5)
        }}>点击加5</button>

      </div>
    )
  }
}



// 课堂练习3:
/* function mapStateToProps(state) {
  return {
    count: state.count,
    name: state.name
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increfnc: function (data) {
      dispatch(increment(data))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Count) */
// 课堂练习2:
/* function mapStateToProps(state) {
  return {
    count: state.count,
    xxx: state.name
  }
}
function mapDispatchToProps(dispatch) {
  return {
    incrementFN: function (data) {
      dispatch(increment(data))

    },
    decrementFN: function (data) {
      dispatch(decrement(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count) */
// 课堂练习:
/* function mapStateToProps(state) {
  //注意,state就是redux给实例的数据,包含所有数据
  return {//返回指定的数据,因为我们只需要这些数据
    count: state.count,
    name: state.msg
  }
}
function mapDispatchToProps(dispatch) {
  return {
    incre: function (data) {//写在这个函数中的返回对象中的函数,会绑定给Count实例
      dispatch(increment(data))//increment是action中封装的函数
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Count)//导出经过链接的Count实例 */

// 笔记:
function mapStateToProps(state) {//映射state数据到props的函数,传入state
  return {//返回一个对象,改对象经过connect的处理,被绑定在了改实例的props上,可动态获取
    count: state.count,
    name: state.msg
  }
}
// export default connect(mapStateToProps)(Count)//使用react-redux的connect高阶函数进行绑定,绑定参数1:一个函数,该函数作用为映射state数据到props上,参数2为目标实例

// 把封装了dispatch的函数传递给组件中
// 将这个函数传入到connect第一次调用的第二个参数上,Count组件就拿不到dispatch了,
// 拿到的是这个函数体中返回的函数
function mapDispatchToProps(dispatch) {
  return {
    incre: function (data) {
      dispatch(increment(data))//这时候打印this.props就没有dispatch函数了,而是incre
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Count)//第一个是传递数据的,第二个参数是传递函数的
// 最好不要在react中调redux的代码(结构分明)

