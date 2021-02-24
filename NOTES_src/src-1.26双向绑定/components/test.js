import React, { Component } from 'react'

export default class Test extends Component {
  state = {
    inp: '',
    ta: '',
    sle: '1',
    cbx: true
  }
  /* fn1 = (e) => {
    this.setState({ inp: e.target.value })
  }
  fn2 = (e) => {
    this.setState({ ta: e.target.value })
  }
  fn3 = (e) => {
    this.setState({ sle: e.target.value })
  }
  fn4 = (e) => {
    this.setState({ cbx: e.target.checked })
  } */
  /* fn = (name) => (e) => {
    let value = name === 'cbx' ? e.target.checked : e.target.value
    this.setState({ [name]: value })
  } */
  fn=(e)=>{
    let name=e.target.dataset.info
    let value = name === 'cbx' ? e.target.checked : e.target.value
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
        <form>
          普通输入框:
          <input type='text' value={this.state.inp} onChange={this.fn("inp")}></input>
          文本框:
          <textarea value={this.state.ta} onChange={this.fn("ta")}></textarea>
          下拉框:
          <select value={this.state.sle} onChange={this.fn("sle")}>
            <option value="1">1号</option>
            <option value="2">2号</option>
            <option value="3">3号</option>
          </select>
          复选框:
          <input type='checkbox' checked={this.state.cbx} onChange={this.fn("cbx")} ></input>
        </form>
      </div>
    )
  }
}