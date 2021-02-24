import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'

import Header from './container/HeaderContainer'
// import List from './components/List/List'
import List from './container/ListContainer'
import Footer from './container/FooterContainer'
import './App.css'
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header></Header>
            <div>
              <List></List>
              <Footer></Footer>
            </div>
          </div>
        </div>
      </Provider>
    )
  }
}
