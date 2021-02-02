import React, { Component } from 'react'
// 导入react-router-dom里面的重要组件
// BrowserRouter这个组件里面,封装了history.listen
// Route组件定义了路径和对应视图的规则
// Link组件,修改了浏览器地址栏的路径但是不然浏览器发送请求
// BrowserRouter as Router 给BR去个别名,那么原来的BR就不能用了,应该使用新的名字,(es6语法)
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/Detail'




export default class App extends Component {
  render() {
    return (
      <Router>
        <h1>点你喜欢的菜(ｷ｀ﾟДﾟ´)!!</h1>
        <Link to='/home'>红烧茄子</Link>
        <Link to='/detail'>烤猪蹄</Link>
        <Route path='/home' component={Home}></Route>
        <Route path='/detail' component={Detail}></Route>

      </Router>
    )
  }
}











/* export default class App extends Component {
  render() {
    return (
      <Router>
        <div>这是App组件</div>
        <Link to='/home'>去主页</Link>
        <Link to='/detail'>详情页</Link>

        <Route path='/home' component={Home}></Route>
        <Route path='/Detail' component={Detail}></Route>
      </Router>
    )
  }
} */


class App2 extends Component {
  render() {
    return (
      // BrowserRouter必须包裹整个应用,而且只需要写一次
      <Router>
        <div>
          <h1>app根组件</h1>
          {/* link组件相当于a标签,但是阻止了默认行为,同时改变了url的路径 */}
          <Link to='/home'>首页</Link>
          <Link to='/detail'>详情页</Link>
          {/* 底层return的是a标签,然后阻止了a的默认行为 */}
          {/* 使用Route组件,配置路径和视图的对应规则 */}
          <Route path='/home' component={Home}></Route>
          <Route path='/detail' component={Detail}></Route>
        </div>
      </Router>
    )
  }
}
