import React, { Component } from 'react'//导入React核心包和React的Component  
import PropTypes from 'prop-types'// 导入PropTypes工具包
class Test extends Component {//Test类组件
  render() {//render函数
    return (//返回值
      <div>
        {this.props.list.map((item) => {//遍历从props.list传入的参数数组
          return <p key={item}>{item}</p>//返回
        })}
      </div>
    )
  }
}

// 给Test组件做props校验.需要给Test组件,添加静态属性propTypes.值为对象.对象里面定义校验规则
Test.propTypes = {
  // list表示要对list属性进行校验.没有写的属性,就不进行校验
  // list属性后面的值是校验规则
  // 所有的规则都是PropTypes开头的
  // array表示list属性应该是数组
  // isRequired表示list属性必须写
  list: PropTypes.array.isRequired,
}

export default Test//默认导出类组件
