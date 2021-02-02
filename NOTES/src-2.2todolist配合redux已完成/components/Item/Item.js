import React, { Component } from 'react'
import './Item.css'

export default class Item extends Component {
  handle = (id) => () => {
    console.log(id);
    this.props.changeIsDone(id)
  }
  handle2 = () => {
    let id = this.props.children.id
    this.props.changeIsDone(id)
  }
  handle3 = () => {
    let id = this.props.children.id
    this.props.deleteOne(id)
  }
  render() {
    // console.log(this.props);
    return (
      <li>
        <label>
          <input
            type="checkbox"
            checked={this.props.children.isDone}

            onChange={this.handle2}//章2:直接调用即可,在handle2中获取后,再传递给changeISDone
          // onChange={this.handle(this.props.children.id)}//章:要传递参数就要用柯里化函数,否则无无限调用
          // onChange={() => this.props.changeIsDone(this.props.children.id)}
          // onChange={this.props.changeIsDone}
          // 富:这里关键点,我的是直接调用的this.props里面的方法,这时候是无法传参的,而里面写箭头函数再写函数调用,可以传递参数?
          />
          <span
            className={this.props.children.isDone ? 'done' : ''}

          >{this.props.children.todoName}</span>
        </label>
        <button className="btn btn-danger" onClick={this.handle3}>删除</button>
      </li >
    )
  }
}
