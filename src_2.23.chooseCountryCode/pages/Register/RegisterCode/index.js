import React, { Component } from 'react'
// 检查验证码
import { checkCode } from '../../../api/register'
//获取验证码
import { sendCode } from './../../../api/login'
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
import './index.css'
import msg from './msg.png'
let time = 5
class VerifyCode extends Component {
  state = {
    ResendCode: true,
    count: time,
    isDisabled: true,
  }
  componentDidMount() {
    // this.sendCodeHandle()
  }
  sendCodeHandle = async () => {
    let { count, ResendCode } = this.state
    if (!ResendCode) return //逻辑:如果已经发送,按钮点击无效
    const phone = localStorage.getItem('phone') //数据:电话号码
    const res = await sendCode(phone) //数据:发送验证码结果

    if (res.data.success) {
      //逻辑:判断验证码是否发送成功
      Toast.success('验证码已经发送', 2)
      this.timer = setInterval(() => {
        count--
        if (count === 0) {
          clearInterval(this.timer) //清除定时器
          this.setState({ ResendCode: true, count: time }) //改变state为初始状态
        } else {
          this.setState({ ResendCode: false, count }) //禁用按钮,改变数字
        }
      }, 1000)
    }
  }

  validator = (rules, value) => {
    if (/^\d{6}$/.test(value)) {
      this.setState({ isDisabled: false })
    } else {
      this.setState({ isDisabled: true })
    }
  }
  checkCodeHandle = async () => {
    const phone = localStorage.getItem('phone')
    const { getFieldValue } = this.props.form
    const code = getFieldValue('code')

    const res = await checkCode(phone, code)
    if (res.data.success) {
      this.props.history.replace('/register/password', {
        from: '/register/code',
      })
    } else {
      Toast.fail('验证码错误', 1)
    }
  }
  render() {
    const { getFieldProps } = this.props.form
    return (
      <div className='wrap'>
        <NavBar
          mode='light'
          icon={<Icon type='left' color='#000' />}
          onLeftClick={() => {
            this.props.history.replace('/register/phone', {
              from: '/register/code',
            })
          }}
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
              onClick={this.sendCodeHandle}
              className={this.state.ResendCode ? 'code-btn active' : 'code-btn'}
            >
              {this.state.ResendCode
                ? '来发验证码'
                : '(' + this.state.count + ')s后获取'}
            </button>
          </div>
          <WingBlank size='lg'>
            <Button
              className='code-next'
              type='warning'
              disabled={this.state.isDisabled}
              onClick={this.checkCodeHandle}
            >
              下一步
            </Button>
          </WingBlank>
          <WingBlank size='lg'>
            遇到问题了?
            <a href='123'>请联系客服</a>
          </WingBlank>
        </WingBlank>
      </div>
    )
  }
}

export default createForm()(VerifyCode)
