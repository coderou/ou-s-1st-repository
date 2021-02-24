import React from 'react'
import C1 from './components/c1'
import C2 from './components/c2'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 1
    }
    // this.fn = this.fn.bind(this)
  }

  /* fn = () => {
    this.setState({ count : this.state.count + 1 })
  } */
  fn() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    console.log(1)
    return (
      <div id='app'>
        <p>{this.state.count}</p>
        <button onClick={() => this.fn()}>按钮</button>
        <C1 />
        <C2 />
      </div>
    )
  }
}


export default App
