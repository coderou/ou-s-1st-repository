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

  //添加数据
  getTodoName = (data) => {//获取input输入的数据
    let obj = {
      id: Date.now(),
      todoName: data,
      isDone: false
    }
    const { list } = this.state
    let newList = [...list]//解构赋值一个新的arr保证react框架知道list变化了
    newList.unshift(obj)//获取的数据添加到数组中
    this.setState({ list: newList })//将list改为新数组
  }

  //点击改变isDone状态
  changeIsDone = (data) => (e) => {//通过科里化函数,在item调用该函数并且将传入的参数拿到
    const { list } = this.state//先拿到list
    const newList = [...list]//解构list,搞一个新数组操作
    newList.forEach(i => {//遍历newList,查找id符合要求的
      if (i.id === data) {//如果符合要求
        i.isDone = !i.isDone//取反
      }
    });
    this.setState({ list: newList })//将原本的list改为newList
  }

  // 单条删除
  deleteOne = (data) => {//通过科里化函数,获取到item的删除按钮点击时候传入的改item的id
    const { list } = this.state //解构拿到当前list
    const newList = list.filter(i => {
      return i.id === data ? false : true//如果i.id等于了data(id),那么表示这个要删除,返回false不添加到newList中
    })
    this.setState({ list: newList })

    // 旧方法:舍弃
    /* list.forEach((i, j) => {//遍历list
      if (i.id === data) {//判断list中的id是否等于删除按钮点击的item的id(data)
        const newList = this.state.list//根据list搞一个新数组
        newList.splice(j, 1)//删除新数组中对应j(index)的项
        this.setState({ list: newList })//再将原本的list改为newList
      }
    }); */
  }

  // 全选
  selectAll = (e) => {//点击全选复选框
    const { list } = this.state//同理,拿到list
    let newList = [...list]//拷贝一个newList,进行操作
    newList.forEach((i, j) => {//遍历newList,需要用到j(index)
      newList[j].isDone = e.target.checked//将newList里面的isDone改为e.target的值,也就是是全选按钮的值
    });
    this.setState({ list: newList })//再将原本的list改为newList
  }

  //删除部分(旧方法,类似手动实现filter,麻烦)
  /* deleteSome1 = () => {//点击删除部分后直接调用这个函数,在这里进行操作
    const { list } = this.state//拿到list
    // const newList = this.state.list
    const newList = []//将newList搞为新数组
    list.forEach((i, j) => {//遍历list数组
      if (i.isDone === false) {//判断谁 没被选中
        // console.log(j)//没被选中的下标
        // newList.splice(j, 1)//这个不行,不行,不行!辣鸡splice函数,我就是从18楼跳下去,喝水噎死,也不会再用你!                                                                                  真香!→_→
        newList.push(i)//将没被选中的push进去newList中
      }
    })
    this.setState({ list: newList })//将list改为newList
  } */

  //删除部分
  deleteSome = () => {
    const { list } = this.state//拿到list
    const newList = list.filter(i => {//过滤list并且返回数组
      return !i.isDone//如果isDone是true,表示已完成,已完成的酒返回false,不添加到新数组中
    })
    this.setState({ list: newList })//更新list
  }

  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header fn={this.getTodoName} />
          {this.state.list.length > 0 && (<div><List
            list={this.state.list}
            fn={this.changeIsDone}
            fn2={() => { this.deleteOne()}} />
            <Footer list={this.state.list} fn={this.selectAll} fn2={this.deleteSome} /></div>)}
        </div>
      </div>
    )
  }
}
