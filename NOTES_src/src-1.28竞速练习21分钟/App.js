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
        todoName: '2021年1月28日14:42:16',
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
    // 改变选择状态
    Pubsub.subscribe('changeIsDone', (msg, data) => {
      const { list } = this.state
      let newList = [...list]
      newList.forEach(i => {
        if (i.id === data) {
          i.isDone = !i.isDone
        }
      })
      this.setState({ list: newList })
    })
    // 添加一条数据
    Pubsub.subscribe('addOne', (msg, data) => {
      const { list } = this.state
      let id = list.length > 0 ? list[0].id + 1 : 0
      let newList = [...list]
      let obj = {
        id,
        todoName: data,
        isDone: false
      }
      newList.unshift(obj)
      this.setState({ list: newList })
    })
    // 删除一条数据
    Pubsub.subscribe('deleteOne', (msg, data) => {
      const { list } = this.state
      let newList = list.filter(i => {
        return data !== i.id
      })
      this.setState({ list: newList })
    })
    // 全选
    Pubsub.subscribe('changeAll', (msg, data) => {
      const { list } = this.state
      let newList = [...list]
      newList.forEach(i => {
        i.isDone = data
      })
      this.setState({ list: newList })
    })
    // 删除部分
    Pubsub.subscribe('deleteSome', (msg, data) => {
      const { list } = this.state
      let newList = list.filter(i => {
        return i.isDone === false
      })
      this.setState({ list: newList })
    })
  }
  componentWillUnmount() {
    Pubsub.clearAllSubscriptions()//不是根组件,就不要这样写
  }
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header></Header>
          {this.state.list.length > 0 ? (<div><List>
            {this.state.list.map(i => {
              return <Item key={i.id}>{i}</Item>
            })}
          </List>
            <Footer>{this.state.list}</Footer></div>) : (<h3>没有数据</h3>)}

        </div>
      </div>
    )
  }
}
