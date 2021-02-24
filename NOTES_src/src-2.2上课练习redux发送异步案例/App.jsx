import React, { Component } from "react";
import {Provider} from 'react-redux'
import store from './redux/store'



/*
  1. 将class --> className
  2. 将没有结束符标签加上结束符：input img
  3. 将style改成{{}}
*/

import List from './container/ListContainer'
// import Search from './container/SearchContainer'
import Search from './pages/Search/index'
// import List from "./pages/List";
// import Search from "./pages/Search";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="container">
        <Search />
        <List />
      </div>
      </Provider>
    );
  }
}
