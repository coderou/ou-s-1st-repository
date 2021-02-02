import React from 'react';
import './app.css'
import PubSub from 'pubsub-js'

import Header from './component/header/header'
import List from './component/list/list'
import Item from './component/item/item'
import Footer from './component/footer/footer'

class App extends React.Component {
  state = {
    list: [
      {
        id: 1,
        todoName: "干饭",
        isDone: true
      },
      {
        id: 2,
        todoName: "睡觉",
        isDone: true
      },
      {
        id: 3,
        todoName: "打代码",
        isDone: false
      },
    ]
  }

  componentDidMount() {
    this.token = PubSub.subscribe('add', (msg, data) => {
      const { list } = this.state
      let id = list.length ? list[list.length - 1].id + 1 : 1
      let obj = {
        id,
        todoName: data,
        isDone: false
      }
      const newList = list;
      newList.push(obj);
      this.setState({
        list: newList
      })
    })

    this.Bool = PubSub.subscribe('bool', (msg, data) => {

    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
    PubSub.unsubscribe(this.Bool)
  }

  render() {
    const { list } = this.state
    return <div className="todo-container">
      <div className="todo-wrap">
        <Header fn={this.getTodoName}></Header>
        <List>
          {list.map(item => {
            return <Item key={item.id} >{item}</Item>
          })}
        </List>
        <Footer></Footer>
      </div>
    </div>
  }
}

export default App;