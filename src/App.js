import React, { Component } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import './App.css'
export default class app extends Component {
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
      todoName: '喝茶',
      isDone: false
    },
    ],
  }

  //获取input输入的数据
  getTodoName = (data) => {
    let obj = {
      id: Date.now(),
      todoName: data,
      isDone: false
    }
    const { list } = this.state
    let newList = [...list]//解构赋值一个新的arr保证react框架知道list变化了
    newList.unshift(obj)
    this.setState({ list: newList })
  }

  //点击改变isDone状态
  changeIsDone = (data) => (e) => {//通过科里化函数,在item调用该函数并且将传入的参数拿到
    // console.log(data)
    // console.log(e.target)
    const { list } = this.state//先拿到list
    list.forEach((i, j) => {//遍历list,查找id符合要求的
      if (i.id === data) {//如果符合要求
        const newList = this.state.list//先搞一个newList
        newList[j].isDone = !newList[j].isDone//将newList的isDone改变
        this.setState({ list: newList })//再将原本的list改为newList
      }
    });
  }

  // 单条删除
  deleteOne = (data) => (e) => {
    const { list } = this.state
    list.forEach((i, j) => {
      if (i.id === data) {
        const newList = this.state.list
        newList.splice(j, 1)
        this.setState({ list: newList })
      }
    });
  }

  // 全选
  selectAll = (e) => {
    const { list } = this.state
    list.forEach((i, j) => {
      const newList = this.state.list
      newList[j].isDone = e.target.checked
      this.setState({ list: newList })
    });
  }

  //删除部分
  deleteSome = () => {
    const { list } = this.state
    // const newList = this.state.list
    const newList = []
    list.forEach((i, j) => {//遍历list数组
      if (i.isDone === false) {//判断谁 没被选中
        console.log(j)//被选中的下标
        // newList.splice(j, 1)
        newList.push(i)
      }
    });
    this.setState({ list: newList })
  }

  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header fn={this.getTodoName} />
          <List list={this.state.list} fn={this.changeIsDone} fn2={this.deleteOne} />
          <Footer list={this.state.list} fn={this.selectAll} fn2={this.deleteSome} />
        </div>
      </div>
    )
  }

}
