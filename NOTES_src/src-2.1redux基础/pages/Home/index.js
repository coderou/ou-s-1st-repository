import React, { Component } from 'react'
import Message from '../Message'
import News from '../News'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className='nav nav-tabs'>
            <li>
              <a href='/home/news'>News</a>
            </li>
            <li>
              <a href='/home/message'>Message</a>
            </li>
          </ul>
          <div>
            <div>
              <News></News>
              <Message></Message>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
