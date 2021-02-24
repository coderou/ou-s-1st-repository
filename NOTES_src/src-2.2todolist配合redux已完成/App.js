import React, { Component } from 'react'
// import Item from './container/ItemContainer'
import List from './container/ListContainer'
import Header from './container/HeaderContainer'
import Footer from './container/FooterContainer';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header></Header>
            <List></List>
            <Footer></Footer>
          </div>
        </div>
      </Provider>
    )
  }
}
