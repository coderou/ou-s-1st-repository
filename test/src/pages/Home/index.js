import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        Home组件
        <button onClick={()=>{
          console.log(this.props.history.replace('/login',{from:'/home'}))
        }}>去登录</button>
      </div>
    );
  }
}

export default Home;
