import React, { useState } from 'react'
import Test from './Test'

export default function App() {
  const [isShow, setIsShow] = useState(true)
  const [data, setData] = useState('hehe')
  return (
    <div>
      APP组件
      <button
        onClick={function () {
          // setIsShow(false)
          setData('哈哈')
        }}
      >
        app按钮
      </button>
      <p>----------------</p>
      {isShow && <Test data={data}></Test>}
    </div>
  )
}
