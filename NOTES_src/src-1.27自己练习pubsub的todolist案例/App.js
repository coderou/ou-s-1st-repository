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

  componentDidMount() {//所有生命周期钩子函数的this一定指向当前实例
    // 订阅1(添加数据)
    this.token1 = Pubsub.subscribe('add', (msg, data) => {
      // 如果这个回调执行了,说明任务名传递过来了,可以直接添加数据了
      let { list } = this.state
      let newList = [...list]
      let id = list.length ? list[0].id + 1 : 0
      let obj = {
        id,
        todoName: data,
        isDone: false
      }
      newList.unshift(obj)
      this.setState({ list: newList })
    })

    Pubsub.publish('list', this.state.list)//发布list
    //订阅2(改变数据isDone状态)
    this.token2 = Pubsub.subscribe('changeIsDone', (msg, data) => {
      // console.log(data)
      const list = this.state.list//拿state中的数据
      let newList = [...list]//解构赋值
      newList.forEach(i => {//遍历新数组
        if (i.id === data) {//判断是否id相等
          i.isDone = !i.isDone//取反
        }
      })
      this.setState({ list: newList })//改变list
    })

    //订阅3(删除单条数据)
    this.token3 = Pubsub.subscribe('deleteOne', (msg, data) => {
      const list = this.state.list//拿state中的数据
      // let newList = [...list]//解构赋值
      const newList = list.filter(i => {//遍历新数组
        return data !== i.id
      })
      this.setState({ list: newList })//改变list
    })

    //订阅4(全选)
    this.token4 = Pubsub.subscribe('selectAll', (msg, data) => {
      // console.log(data.target.checked)
      const list = this.state.list
      const newList = [...list]
      newList.forEach(i => {
        i.isDone = !data.target.checked
      })
      this.setState({ list: newList })
    })

    //订阅5(删除部分)
    this.token5 = Pubsub.subscribe('deleteSome', (msg, data) => {
      // console.log(data.target.checked)
      const list = this.state.list
      const newList = list.filter(i => {
        return i.isDone === false
      })
      this.setState({ list: newList })
    })

    
  }

  componentWillUnmount() {
    Pubsub.unsubscribe(this.token1)
    Pubsub.unsubscribe(this.token2)
    Pubsub.unsubscribe(this.token3)
    Pubsub.unsubscribe(this.token4)
    Pubsub.unsubscribe(this.token5)
  }
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header></Header>
          {this.state.list.length>0?(<div>
            <List name='123'>
              {this.state.list.map(i => {//注意,这里用forEach不行,因为forEach的返回值是undefined,而map才是返回加工后的'数组'
                // console.log(i)//i是一个对象,但是将i这个对象以{i}的形式写在返回的Item中,就会被解析为要传递给Item的数据,此时!!可以在Item组件中以this.props.children的方式获取到
                // 类似在List中写Item,本质上,是newItem,也是一个对象,所以这里应该也是一样的
                //经过测试,在<Item a={b}>c</Item>中,a位置是props传递数据,b为其传递的值,如果是key则为改Item的唯一标识符.而c位置可以传递任意参数,均可以在Item中以this.props.children的方式拿到,但是注意,单个参数为数组,多个参数就是数组
                return <Item key={i.id} test={'哈哈'} >{i}123</Item>
              })}
            </List>
            <Footer>{this.state.list}</Footer>
          </div>):<h3>什么都没有</h3>}
        </div>
      </div>
    )
  }
}
