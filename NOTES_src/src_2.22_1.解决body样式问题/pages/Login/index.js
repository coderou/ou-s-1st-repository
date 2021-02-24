import React, { Component } from 'react'
import {
  NavBar,
  Icon,
  InputItem,
  WingBlank,
  Button,
  WhiteSpace,
} from 'antd-mobile'

export default class Login extends Component {
  toRegister = () => {
    this.props.history.replace('/register/phone', { from: '/login' })
  }
  render() {
    return (
      <div className="wrap">
        <NavBar
          mode='light'
          icon={<Icon type='left' color={'#000'} />}
          onLeftClick={() => {
            console.log('你点击了返回按钮')
          }}
        >
          硅谷注册登录
        </NavBar>
        <WingBlank>
          {/* 输入手机号 */}
          <InputItem placeholder='请输入手机号'>
            <div className='inp_phone'>
              <span
                onClick={() => {
                  this.props.history.replace('/country', { from: '/login' })
                }}
              >
                +86
              </span>
              <Icon type='down' />
            </div>
          </InputItem>

          {/* 获取验证码 */}
          <div className='inp_phone'>
            <InputItem placeholder='请输入手机验证码'></InputItem>
            <div className='inp_code_tip'>获取验证码</div>
          </div>

          <WhiteSpace />
          <WhiteSpace />
          <WhiteSpace />

          {/* 登录按钮 */}
          <WingBlank>
            <Button type='warning' disabled className='login_btn'>
              登录
            </Button>
            <WhiteSpace />

            {/* 密码登录\手机注册 */}
            <div className='login_nav'>
              <div>账号密码登录</div>
              <div onClick={this.toRegister}>手机快速注册</div>
            </div>

            {/* 其他登录方式 */}
            <div className='login_other'>
              <div className='line '></div>
              <div className='text '>其他登录方式</div>
              <div className='line '></div>
            </div>

            {/* iconfont显示第三方图标 */}
            <div className='login_oauth'>
              <i className='iconfont icon-github'></i>
              <i className='iconfont icon-qq'></i>
              <i className='iconfont icon-wechat'></i>
            </div>

            {/* 确认协议 */}
            <div className='login_bottom'>
              <span>
                未注册的手机号与验证后将自动创建硅谷账号,登录即代表您已同意
                <a href='http://www.baidu.com'>硅谷隐式政策</a>
              </span>
            </div>
          </WingBlank>
        </WingBlank>
      </div>
    )
  }
}
