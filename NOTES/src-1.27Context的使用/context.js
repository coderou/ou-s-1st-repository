import React from 'react'
export default React.createContext()
// 注意:模块虽然被引入了多次,但是模块里面的代码只执行了一次,所以只有一个context对象