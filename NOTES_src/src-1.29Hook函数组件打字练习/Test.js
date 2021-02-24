import React, { useState, useEffect } from 'react'

export default function Test(props) {
  // 使用的钩子函数都写在函数组件的最上面
  // 结构的数组中数据的名字自己定义即可.但是顺序要记住:
  // 第一个是状态的属性, 第二个是设置状态的函数(既可以修改数据,也可以更新视图)
  const [count, setCount] = useState(0)
  const [msg, setMsg] = useState('one')

  //useEffect模拟了类组件中挂载成功,更新成功和即将卸载这个三个钩子
  //外层的回调函数,模拟了挂载成功和更新成功
  //注意: useEffect的第二个参数,如果是一个空的数组,那么外层回调函数就只模拟挂载成功.内部函数就不会被频繁的调用
  // 如果数组中传入了数据,那么如果传入的多个数据中有一个数据跟之前不同,外层函数就模拟更新.否则,依然不模拟
  useEffect(() => {
    //加载这里注册dom事件
    console.log('挂载成功/更新成功了')
    return () => {
      // 内部函数模拟了即将卸载
      console.log('组件即将卸载')
      // 卸载的时候,移除掉dom事件
    }
  }, [count, props.data])

  function handle() {
    // 要修改状态
    setCount(count + 1)
    setMsg('two')
  }
  return (
    <div>
      Test组件
      <p>{count}</p>
      <p>{msg}</p>
      <button onClick={handle}>按钮</button>
    </div>
  )
}
