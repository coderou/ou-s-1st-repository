import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
import Header from './components/Header/Header'
import List from './components/List/List'
import Item from './components/Item/Item'
import Footer from './components/Footer/Footer'
import './App.css'

export default class App extends Component {
  state = {
    list: [
      {
        id: 3,
        todoName: '打游戏',
        isDone: false,
      },
      {
        id: 2,
        todoName: '吃饭',
        isDone: true,
      },
      {
        id: 1,
        todoName: '找富婆',
        isDone: false,
      },
    ],
  }

  componentDidMount() {
    // 订阅:改变isDone
    Pubsub.subscribe('changeIsDone', (msg, data) => {
      const list = this.state.list
      const newList = [...list]
      newList.forEach((i, j) => {
        if (i.id === data) {
          i.isDone = !i.isDone
        }
      })
      this.setState({ list: newList })
    })
    // 订阅:添加一条
    Pubsub.subscribe('addOne', (msg, data) => {
      const list = this.state.list
      const newList = [...list]
      let id = list.length > 0 ? newList[0].id + 1 : 0
      let obj = {
        id,
        todoName: data,
        isDone: false
      }
      newList.unshift(obj)
      this.setState({ list: newList })
    })
    //订阅:删除一条
    Pubsub.subscribe('deleteOne', (msg, data) => {
      const list = this.state.list
      const newList = list.filter((i, j) => {
        return i.id !== data
      })
      this.setState({ list: newList })
    })
    // 订阅:全选按钮
    Pubsub.subscribe('selectAll', (msg, data) => {
      const list = this.state.list
      const newList = [...list]
      newList.forEach((i, j) => {
        i.isDone = !data.target.checked
      })
      this.setState({ list: newList })
    })
    // 订阅:删除部分
    Pubsub.subscribe('deleteSome', (msg, data) => {
      const list = this.state.list
      const newList = list.filter((i, j) => {
        return i.isDone === false
      })
      this.setState({ list: newList })
    })

  }
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header></Header>
          {this.state.list.length > 0 ? (<div><List>
            {this.state.list.map(i => {
              return <Item key={i.id}>{i}</Item>//这里会将{i.todoName}以会this.props.children的形式传递给item中
            })}
          </List><Footer>{this.state.list}</Footer></div>) : (<h3>这里什么都没有</h3>)}

        </div>
      </div>
    )
  }
}
