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
    this.token = Pubsub.subscribe('add', (msg, data) => {
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
  }

  componentWillUnmount() {
    Pubsub.unsubscribe(this.token)
  }
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header></Header>
          <div>
            <List name='123'>
              {this.state.list.map(i => {//注意,这里用forEach不行,因为forEach的返回值是undefined,而map才是返回加工后的'数组'
              // console.log(i)//i是一个对象,但是将i这个对象以{i}的形式写在返回的Item中,就会被解析为要传递给Item的数据,此时!!可以在Item组件中以this.props.children的方式获取到
              // 类似在List中写Item,本质上,是newItem,也是一个对象,所以这里应该也是一样的
              //经过测试,在<Item a={b}>c</Item>中,a位置是props传递数据,b为其传递的值,如果是key则为改Item的唯一标识符.而c位置可以传递任意参数,均可以在Item中以this.props.children的方式拿到,但是注意,单个参数为数组,多个参数就是数组
                return <Item key={i.id} test={'哈哈'} >{i}123</Item>
              })}
            </List>
            <Footer></Footer>
          </div>
        </div>
      </div>
    )
  }
}
