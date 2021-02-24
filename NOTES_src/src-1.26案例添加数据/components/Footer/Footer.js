import React, { Component } from 'react'
import './Footer.css'
export default class footer extends Component {
  render() {
    return (
      <div className="tdodo-footer">
        <label>
          <input type="checkbox" />
        </label>
        <span>
          <span>已完成0</span> / 全部2
        </span>
        <button className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
