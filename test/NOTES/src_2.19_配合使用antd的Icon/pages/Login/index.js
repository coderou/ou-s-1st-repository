import React, { Component } from "react";
import { NavBar, Icon } from "antd-mobile";
export default class Login extends Component {
  render() {
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" color={"#000"} />}
          onLeftClick={() => {
            console.log("onLeftClick");
          }}
        >
          硅谷注册登录
        </NavBar>
      </div>
    );
  }
}
