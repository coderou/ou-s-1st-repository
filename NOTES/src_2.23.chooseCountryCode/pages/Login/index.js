import React, { Component } from 'react'
import {
  NavBar,
  Icon,
  WingBlank,
  WhiteSpace,
  InputItem,
  Button,
} from 'antd-mobile'
export default class Login extends Component {
  state = {
    country: 86,
  }
  toRegister = () => {
    // console.log(this.props);
    //因为组件在app被Route包裹了,所以可以通过props访问history对象
    this.props.history.replace('/register/phone', { from: '/login' })
  }
  componentDidMount() {
    // 如果是直接打开的login页面,那么就不会有区号传递过来,所以要判断一下
    const country =
      this.props.location.state && this.props.location.state.countryCode
    // this.props.location.state当没发生页面跳转的时候,是undefined,所以不能通过 || 简写
    if (country) {
      this.setState({ country })
    }
  }

  render() {
    return (
      <div>
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
                +{this.state.country}
              </span>
              <Icon type='down'></Icon>
            </div>
          </InputItem>

          <div className='inp_code'>
            <InputItem placeholder='请输入手机验证码'></InputItem>
            <div className='inp_code_tip'>获取验证码</div>
          </div>

          <WhiteSpace></WhiteSpace>
          <WhiteSpace></WhiteSpace>
          <WhiteSpace></WhiteSpace>

          <WingBlank>
            <Button type='warning' disabled className='login_btn'>
              登录
            </Button>
            <WhiteSpace></WhiteSpace>

            <div className='login_nav'>
              <div>账号密码登录</div>
              <div onClick={this.toRegister}>手机快速注册</div>
            </div>

            <div className='login_other'>
              <div className='line'></div>
              <div className='text'>其他登录方式</div>
              <div className='line'></div>
            </div>

            <div className='login_oauth'>
              <i className='iconfont icon-github'></i>
              <i className='iconfont icon-qq'></i>
              <i className='iconfont icon-wechat'></i>
            </div>

            <div className='login_bottom'>
              <span>
                未注册的手机号与验证码将会自动创建硅谷账号,登录即代表您同意
                <a href='http://www.baidu.com'>硅谷隐式政策</a>
              </span>
            </div>
          </WingBlank>
        </WingBlank>
      </div>
    )
  }
}
