import React, { Component } from 'react'
import {
  NavBar,
  Icon,
  InputItem,
  WingBlank,
  Button,
  WhiteSpace,
  Toast,
} from 'antd-mobile'
import { sendCode } from '../../api/login'
import { verifyCodeFn } from '../../api/register'
import { createForm } from 'rc-form'
let time = 5
class Login extends Component {
  state = {
    country: 86,
    isDisabled: true,
    isSendCode: true,
    count: time,
  }

  toRegister = () => {
    this.props.history.replace('/register/phone', { from: '/login' })
  }
  toHome = async () => {
    // 发送请求,验证验证码是否正确
    const phone = localStorage.getItem('phone')
    const code = this.props.form.getFieldValue('code') //这里重点,因为被高阶函数组件封装了,所以可以拿到下面校验的"phone"字段

    const res = await verifyCodeFn(phone, code)
    if (res.data.success) {
      this.props.history.replace('/home', { from: '/login', })//@@2注意,replace参数1要有/  后面的from:login也是,因为是根据路由表来的
    } else {
      Toast.fail('验证码错误(～￣▽￣)～')
    }
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

  // 校验手机号
  validatorPhone = (rules, value) => {
    // console.log(rules)
    // console.log(value)
    // 要判断用户输入的内容是否是手机号
    if (/^1[3456789][\d]{9}$/.test(value)) {
      // console.log('校验成功')
      this.setState({ isDisabled: false })
    } else {
      // console.log('校验失败')
      this.setState({ isDisabled: true })
    }
  }
  // 请求发送验证码封装的函数
  sendCodeFn = async () => {
    let { count, isSendCode } = this.state
    if (!isSendCode) return //Button里面实现了这段代码,就是Button标签的里面的onClick事件
    // 获取localStorage里面存储的手机号
    const phone = localStorage.getItem('phone')
    // console.log(phone);
    const res = await sendCode(phone)
    // console.log(res);
    if (res.data.success) {
      Toast.success('ლ(′◉❥◉｀ლ)验证码已经发送到您的手机', 2)
      // 倒计时
      this.timeId = setInterval(() => {
        // console.log(count);
        count--
        if (count === 0) {
          // 清除定时器
          clearInterval(this.timeId)
          this.setState({ isSendCode: true, count: time })
          return
        }
        this.setState({ isSendCode: false, count })
      }, 1000)
      // 修改样式
    }
  }
  // 校验验证码
  validatorCode = (rules, value) => {
    let isDisabled = true
    if (/^\d{6}$/.test(value)) {
      // 成了
      console.log('恩公')
      isDisabled = false
    }
    this.setState({ isDisabled })
  }

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
            /* {...getFieldProps('phone', {
              rules: [
                {
                  validator: this.validatorPhone,
                },
              ],
            })} */
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
            <InputItem
              {...getFieldProps('code', {
                rules: [
                  {
                    validator: this.validatorCode,
                  },
                ],
              })}
              placeholder='请输入手机验证码'
            ></InputItem>
            <div className='inp_code_tip' onClick={this.sendCodeFn}>
              获取验证码
            </div>
          </div>

          <WhiteSpace />
          <WhiteSpace />
          <WhiteSpace />

          {/* 登录按钮即以下部分 */}
          <WingBlank>
            <Button
              type='warning'
              disabled={this.state.isDisabled}
              className='login_btn'
              onClick={this.toHome}
            >
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
