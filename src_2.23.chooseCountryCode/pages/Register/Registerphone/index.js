import React, { Component } from 'react'
import { verifyPhone } from '../../../api/register'
import {
  NavBar,
  Icon,
  WingBlank,
  WhiteSpace,
  InputItem,
  Button,
  Modal,
  Toast,
} from 'antd-mobile'
import { createForm } from 'rc-form'
class Login extends Component {
  state = {
    isDisabled: true,
  }
  // 组件加载完成,弹出选择框
  componentDidMount() {
    Modal.alert('你是个傻逼', '你同意么?', [
      {
        text: '不同意,滚回去登录',
        onPress: () => {
          // console.log(this.props.location)
          this.props.history.replace(this.props.location.state.from, {
            from: '/register/phone',
          })
        },
      },
      {
        text: '同意,我要注册',
        style: { backgroundColor: 'red', color: '#fff' },
      },
    ])
  }

  // 输入框检查手机是否符合要求
  validator = (rules, value) => {
    if (/^1[3456789][\d]{9}$/.test(value)) {
      this.setState({ isDisabled: false })
    } else {
      this.setState({ isDisabled: true })
    }
  }

  // 点击下一步,跳转到验证码
  toRegisterCode = async () => {
    const { getFieldValue } = this.props.form
    const phone = getFieldValue('phone')
    const res = await verifyPhone(phone)
    if (res.data.success) {
      // 未注册,提示授权短信
      Modal.alert('你是个傻逼', '你同意么?', [
        {
          text: '不同意,滚回去登录',
        },
        {
          text: '同意,我要注册',
          onPress: () => {
            localStorage.setItem('phone',phone)
            this.props.history.replace('/register/code', {
              from: '/register/phone',
            })
          },
          style: { backgroundColor: 'red', color: '#fff' },
        },
      ])
    } else {
      // 已经注册
      Toast.fail(res.data.message, 1.5)
    }
  }

  render() {
    const { isDisabled } = this.state
    const { getFieldProps } = this.props.form
    return (
      <div>
        <NavBar
          mode='light'
          icon={<Icon type='left' color={'#000'} />}
          onLeftClick={() => {
            this.props.history.replace('/login', { from: '/register/phone' })
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
              <span>+86</span>
              <Icon type='down'></Icon>
            </div>
          </InputItem>

          <WhiteSpace></WhiteSpace>
          <WhiteSpace></WhiteSpace>
          <WhiteSpace></WhiteSpace>

          <WingBlank>
            <Button
              type='warning'
              disabled={isDisabled}
              className='login_btn'
              onClick={this.toRegisterCode}
            >
              下一步
            </Button>
            <WhiteSpace></WhiteSpace>
          </WingBlank>
        </WingBlank>
      </div>
    )
  }
}

export default createForm()(Login)
