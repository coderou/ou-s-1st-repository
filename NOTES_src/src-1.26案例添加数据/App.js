import React, {
  Component
} from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import './App.css'


export default class App extends Component {
  state = {
    list: [{
      id: 1,
      todoName: '吃饭',
      isDone: true
    },
    {
      id: 2,
      todoName: '睡觉',
      isDone: false
    },
    {
      id: 3,
      todoName: '找富婆',
      isDone: true
    },

    ]
  }

  getTodoName = (todoName) => {
    // 根据todoName生成一个对象
    let obj = {
      id: Date.now(),
      todoName,
      isDone: false
    }
    let { list } = this.state
    // list.push/unshift()//都修改了数组本身,不建议这么做,因为是浅层,所以如果数据变化可能不会更新视图
    // 根据list创建一个新的数组
    // !!!这种编码方式会保证你以后不出现问题,注意不要直接修改数据本身,而是创建新数组,即来一个新地址,保证让第三方库知道你改了数据
    let newList = [...list]
    newList.unshift(obj)
    this.setState({ list: newList })
  }

  render() {
    return (
      <div className="todo-container" >
        <div className="todo-wrap" >
          < Header fn={this.getTodoName} />
          <List list={this.state.list} />
          <Footer />
        </div>
      </div>
    )
  }
}