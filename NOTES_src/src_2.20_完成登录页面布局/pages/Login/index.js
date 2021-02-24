import React, { Component } from "react"
import {
  NavBar,
  Icon,
  InputItem,
  WingBlank,
  Button,
  WhiteSpace,
} from "antd-mobile"
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
        <WingBlank>
          <InputItem placeholder="请输入手机号">
            <div className="inp_phone">
              <span>+86</span>
              <Icon type="down" />
            </div>
          </InputItem>
          <div className="inp_phone">
            <InputItem placeholder="请输入手机验证码"></InputItem>
            <div className="inp_code_tip">获取验证码</div>
          </div>
          <WhiteSpace />
          <WhiteSpace />
          <WhiteSpace />
          <WingBlank>
            
            <Button type="warning" disabled className="login_btn">
              登录
            </Button>
            <WhiteSpace />
            
            <div className="login_nav">
              <div>账号密码登录</div>
              <div>手机快速注册</div>
            </div>
            
            <div className="login_other">
              <div className="line "></div>
              <div className="text ">其他登录方式</div>
              <div className="line "></div>
            </div>
            
            <div className="login_oauth">
              <i className="iconfont icon-github"></i>
              <i className="iconfont icon-qq"></i>
              <i className="iconfont icon-wechat"></i>
            </div>
            <div className="login_bottom">
              <span>
                未注册的手机号与验证后将自动创建硅谷账号,登录即代表您已同意
                <a href="">硅谷隐式政策</a>
              </span>
            </div>
          </WingBlank>
        </WingBlank>
      </div>
    );
  }
}
