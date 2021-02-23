import React, { Component } from 'react'
import {
  NavBar,
  Icon,
  InputItem,
  WingBlank,
  Button,
  WhiteSpace,
} from 'antd-mobile'
import { createForm } from 'rc-form'
class Login extends Component {
  state = {
    country: 86,
    isDisabled: true,
  }

  toRegister = () => {
    this.props.history.replace('/register/phone', { from: '/login' })
  }
  componentDidMount() {
    // 获取区号
    // 如果是直接打开的login页面,那么就不会有区号传递过来,所以要判断一下
    const country =
      this.props.location.state && this.props.location.state.country
    // this.props.location.state当没发生页面跳转的时候,是undefined,所以不能通过 || 简写
    if (country) {
      this.setState({ country })
    }
  }
  /*  componentWillUnmount() {
    console.log('每次通过路由跳转,改页面都会卸载一次')
  } */

  render() {
    const { getFieldProps } = this.props.form
    return (
      <div className='wrap'>
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
          <InputItem
            {...getFieldProps('phone', {
              rules: [
                {
                  validator: this.validator,
                },
              ],
            })}
            placeholder='请输入手机号'
          >
            <div className='inp_phone'>
              <span
                onClick={() => {
                  this.props.history.replace('/country', { from: '/login' })
                }}
              >
                +{this.state.country}
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

          {/* 登录按钮即以下部分 */}
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
              <i
                className='iconfont icon-github'
                onClick={() => {
                  // 给github发送请求
                  window.location.href =
                    'https://github.com/login/oauth/authorize?client_id=0a4276425505fa2e86fa'
                }}
              ></i>
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

export default createForm()(Login)
