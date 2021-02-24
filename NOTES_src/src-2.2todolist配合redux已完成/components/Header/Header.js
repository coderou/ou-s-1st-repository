import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
  state = {
    info: ''
  }
  changeValue = (e) => {
    this.setState({ info: e.target.value.trim() })
  }
  render() {
    // console.log(this.props);
    return (
      <div className="todo-header">
        <input
          type="text"
          value={this.state.info}
          onChange={this.changeValue}
          onKeyUp={this.props.addOne}
        />
      </div>
    )
  }
}
