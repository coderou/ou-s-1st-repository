import React, { Component } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import './App.css'
export default class app extends Component {
  state = {
    list: [{
      id: 3,
      todoName: '吃饭',
      isDone: true
    },
    {
      id: 2,
      todoName: '睡觉',
      isDone: false
    },
    {
      id: 1,
      todoName: '喝茶',
      isDone: false
    },
    ],
  }

  //添加数据
  getTodoName = (data) => {//获取input输入的数据
    let { list } = this.state
    // 计算id的值:数组没有值:为1,有值,为最后一个的id+1
    // let id = list.length > 0 ? list[list.length - 1].id + 1 : 1
    let id = list.length > 0 ? list[0].id + 1 : 1//只需要判断list[0]即可,但是原始数据的id排序要为321,反之为123
    let obj = {
      id,
      todoName: data,
      isDone: false
    }
    let newList = [...list]//解构赋值一个新的arr保证react框架知道list变化了
    newList.unshift(obj)
    // newList.push(obj)//不用unshift了,直接向后加
    this.setState({ list: newList })
  }

  //-------------------------
  //改变isDone状态
  getTodoIdUpdate = (id) => {
    // console.log(id)
    // 根据id找到对应的数据对象,然后将数据对象中的isDone的值取反
    let { list } = this.state//拿到list
    let newList = [...list]//不要修改元数据,解构后放到新数组中
    newList.forEach(i => {//遍历新数组
      if (i.id === id) {//判断id是否相等
        i.isDone = !i.isDone//取反
      }
    })
    this.setState({ list: newList })//改变list
  }
  //单条删除
  getTodoIdDelete = (id) => {
    // console.log(id)
    // 根据id 将list里面的制定的数据删除掉
    // filter 是数组的方法,返回一个新数组,新的数组是过滤之后的数组
    const { list } = this.state
    // const newList = [...list]//filter已经是得到新数组了
    const newList = list.filter((i) => {
      return i.id === id ? false : true
    })
    this.setState({ list: newList })
  }

  // 注意:这个函数不需要接收参数,只是当footer中调用的时候,这个函数体中的代码需要执行以下代码
  updateAllTodos = () => {


    let { list } = this.state
    /* 
      every函数:
        let arr=[1,2,3,4,5]
        const res=arr.every(i=>{
           return i<5? true:false//一个不满足条件,就返回false
        })
        console.log(res)
    */
    // 先判断lsit里面是否都完成了
    //  如果list的数据都是true,那么res也是true
    // 如果list的数据有一个是false,那么res也是false
    const res = list.every(i => {
      return i.isDone
    })
    // 如何去修改数据
    // 如果数据中所有都完成了,就变成全部不完成
    // 如果数据中有一个未完成,就变成全部完成
    let newList = [...list]//搞一个新数组
    newList.forEach(i => {//遍历新数组
      i.isDone = !res//直接赋值为res的反值
    })
    this.setState({ list: newList })//设置list
  }
  // 删除选中的
  delAllDoneTodos = () => {
    let { list } = this.state
    let newList = list.filter(i => {
      return !i.isDone
    })
    this.setState({ list: newList })
  }
  //------------------------


  /* //点击改变isDone状态
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
  } */

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
    let { list } = this.state
    // 所有的任务项
    let allTodos = list.length
    // 完成的任务项
    let allDoneTodos = 0
    list.forEach(i => {
      if (i.isDone === true) {
        allDoneTodos++
      }
    })
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header fn={this.getTodoName} />
          {/* list.length直接写,如果没有数据就显示0,这里写>0,那么结果是布尔值,false,不会被渲染 */}
          {list.length > 0 && (<div><List
            getTodoIdDelete={this.getTodoIdDelete}
            getTodoIdUpdate={this.getTodoIdUpdate}
            list={this.state.list}
            fn={this.changeIsDone}
            fn2={this.deleteOne} />
            <Footer
              delAllDoneTodos={this.delAllDoneTodos}
              updateAllTodos={this.updateAllTodos}
              allDoneTodos={allDoneTodos}
              allTodos={allTodos}
              list={this.state.list}
              fn={this.selectAll}
              fn2={this.deleteSome} /></div>)}
        </div>
      </div>
    )
  }

}
