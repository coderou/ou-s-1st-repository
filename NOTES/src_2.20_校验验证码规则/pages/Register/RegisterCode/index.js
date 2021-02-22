import React, { Component } from 'react'
import { createForm } from 'rc-form'
import {
  NavBar,
  Icon,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button,
  Toast,
} from 'antd-mobile'
import { sendCode } from './../../../api/login'
import './index.css'
import msg from './msg.png'

let time = 5
class VerifyCode extends Component {
  state = {
    idSendCode: true,
    count: time,
    isDisable: true,
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
  validator = (rules, value) => {
    let isDisabled = true
    if (/^\d{6}$/.test(value)) {
      // 成了
      isDisabled = false
    }
    this.setState({ isDisabled })
  }

  toPassword = () => {
    this.props.history.replace('/register/password', { from: '/register/code' })
  }
  componentDidMount() {
    this.sendCodeFn()
  }

  render() {
    const { isSendCode, count, isDisable } = this.state
    const { getFieldProps } = this.props
    return (
      <div className='wrap'>
        <NavBar
          mode='light'
          icon={<Icon type='left' color='#000' />}
          onLeftClick={console.log(111)}
        >
          硅谷注册
        </NavBar>
        <WhiteSpace size='lg'></WhiteSpace>

        <WingBlank size='lg'>
          <div className='img'>
            <img src={msg} alt='' />
          </div>
          <WhiteSpace size='lg'></WhiteSpace>
          <WingBlank size='lg'>
            <div>
              我们将以短信或电话的形式将验证码发送给您，请注意接听0575/025/0592/010等开头的电话
            </div>
          </WingBlank>
          <WhiteSpace size='lg'></WhiteSpace>

          <div className='code'>
            <InputItem
              {...getFieldProps('code', {
                rules: [
                  {
                    validator: this.validator,
                  },
                ],
              })}
              clear
              placeholder='请输入手机验证码'
            ></InputItem>
            <button
              className={isSendCode ? 'code-btn active' : 'code-btn'}
              onClick={this.sendCodeFn}
            >
              {isSendCode ? '点击获取' : '(' + count + ')s后重新获取'}
            </button>
          </div>
          <WingBlank size='lg'>
            <Button
              className='code-next'
              type='warning'
              disabled={isDisable}
              onClick={this.toPassword}
            >
              下一步
              {/* Button中处理了onClick,才会生效 */}
            </Button>
          </WingBlank>
          <WingBlank size='lg'>
            遇到问题了?
            <a href='coderou'>请联系客服</a>
          </WingBlank>
        </WingBlank>
      </div>
    )
  }
}

export default createForm()(VerifyCode)
