import React, { Component } from 'react'
import Detail from '../Detail'

export default class index extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href='/home/message/1'>message001</a>
          </li>
          <li>
            <a href='/home/message/2'>message002</a>
          </li>
          <li>
            <a href='/home/message/3'>message003</a>
          </li>
        </ul>
        <button>添加</button>
        <button>替换</button>
        <Detail></Detail>
      </div>
    )
  }
}
