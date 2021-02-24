import React, { Component } from 'react';
import Count from './container/CountContainer'
import { Provider } from 'react-redux'
import store from './redux/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Count></Count>
      </Provider>
    );
  }
}

export default App;
