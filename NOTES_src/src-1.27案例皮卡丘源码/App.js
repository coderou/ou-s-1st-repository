import React, { Component } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import './App.css'
export default class App extends Component {
  state = {
    list: [
      {
        id: 2,
        todoName: '吃饭',
        isDone: false,
      },
      {
        id: 1,
        todoName: '找富婆',
        isDone: false,
      },
    ],
  }

  // 添加任务的逻辑
  getTodoName = (todoName) => {
    let { list } = this.state
    //  根据todoName生成一个对象
    // 计算id的值:
    // 如果数组中没有值,就直接给这个任务对象的id赋值为1, 如果有值,就找到最后一个,将id获取到,然后加一,得到的结果,作为新的任务的id
    // let id = list.length > 0 ? list[list.length - 1].id + 1 : 1
    // 如果往前面添加,则找数组中第一个值的id.加一
    let id = list.length > 0 ? list[0].id + 1 : 1
    let obj = {
      id,
      todoName,
      isDone: false,
    }

    // 注意: 未来使用的很多第三方的库/框架.对比数据都是浅层对比.随意养成一个好的习惯,不要直接修改复杂数据类型的本身的数据,应该根据原来的数据,创建一份新的数据,然后修改新的数据,最终将新的数据复制给原来存储数据的变量
    // 根据list,创建一个新的数组
    let newList = [...list]
    newList.unshift(obj)

    this.setState({
      list: newList,
    })
  }
  //修改任务的逻辑
  getTodoIdUpdate = (id) => {
    // console.log(id)
    // 根据id,找到对应的数据对象,然后将数据对象中isDone的值取反
    let { list } = this.state
    let newList = [...list]
    newList.forEach((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone
      }
    })
    this.setState({
      list: newList,
    })
  }
  //删除指定任务的逻辑
  getTodoIdDelete = (id) => {
    // console.log(id)
    // 根据id,将list里面的指定的数据删除掉
    // filter 是数组的方法,返回一个新的数组,新的数组是过滤之后的数组
    let { list } = this.state
    const newList = list.filter((item) => {
      return item.id !== id
    })
    this.setState({
      list: newList,
    })
  }

  // 注意: 这个函数,不接收参数,只是当footer中调用的时候,这个函数体中的代码需要执行以下
  // 批量修改任务状态的逻辑
  updateAllTodos = () => {
    // 如何去修改数据

    // 先判断list里面是否都完成了
    let { list } = this.state
    // 如果list的数据都是true,res也是true.
    // 如果list的数据有一个是false,res就是false
    const res = list.every((item) => {
      return item.isDone
    })

    // 如果数据中所有都完成了,就变成全部不完成
    // 如果数据中有一个未完成,就变成全部完成
    let newList = [...list]
    newList.forEach((item) => {
      item.isDone = !res
    })
    this.setState({
      list: newList,
    })
    // if (res) {
    //   newList.forEach((item) => {
    //     item.isDone = false
    //   })
    // } else {
    //   newList.forEach((item) => {
    //     item.isDone = true
    //   })
    // }
  }
  // 删除所有完成任务的逻辑
  delAllDoneTodos = () => {
    let { list } = this.state
    let newList = list.filter((item) => {
      return !item.isDone
    })
    this.setState({
      list: newList,
    })
  }

  render() {
    let { list } = this.state

    // 所有的任务项
    let allTodos = list.length
    // 完成的任务项
    let allDoneTodos = 0
    list.forEach((item) => {
      if (item.isDone) {
        allDoneTodos++
      }
    })
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header fn={this.getTodoName}></Header>
          {list.length > 0 && (
            <div>
              <List
                list={this.state.list}
                getTodoIdUpdate={this.getTodoIdUpdate}
                getTodoIdDelete={this.getTodoIdDelete}
              ></List>
              <Footer
                allTodos={allTodos}
                allDoneTodos={allDoneTodos}
                updateAllTodos={this.updateAllTodos}
                delAllDoneTodos={this.delAllDoneTodos}
              ></Footer>
            </div>
          )}
        </div>
      </div>
    )
  }
}
