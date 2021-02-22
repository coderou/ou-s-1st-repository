import React, { Component } from 'react'
import { verifyPhone } from '../../../api/register'
import {
  NavBar,
  Icon,
  InputItem,
  WingBlank,
  Button,
  WhiteSpace,
  Modal,
  Toast,
} from 'antd-mobile'
import { createForm } from 'rc-form'
class index extends Component {
  static displayName = 'RegisterPhone' //高阶组件和这个组件都叫这个名字,高阶组件后面有标志Form
  state = {
    isDisable: true,
  }
  componentDidMount() {
    Modal.alert(
      '注册协议及隐式政策',
      '我相信你是一个傻逼,但是你自己不说我怎么会知道?所以大声说出来,你是不是傻逼?',
      [
        {
          text: '不同意',
          onPress: () => {
            console.log(this.props.location)
            this.props.history.replace(this.props.location.state.from, {
              from: '/register/phone',
            })
          },
        },
        {
          text: '同意',
          onPress: () => console.log('ok'),
          style: { backgroundColor: 'red', color: '#fff' },
        },
      ]
    )
  }

  // 校验手机号的处理函数
  validator = (rules, value) => {
    // console.log(rules)
    // console.log(value)
    // 要判断用户输入的内容是否是手机号
    if (/^1[3456789][\d]{9}$/.test(value)) {
      // console.log('校验成功')
      this.setState({ isDisable: false })
    } else {
      // console.log('校验失败')
      this.setState({ isDisable: true })
    }
  }

  // 验证手机号是否存在的函数
  verifyPhoneHandle = async () => {
    // 获取手机号:
    const { getFieldValue } = this.props.form //拿到getFieldValue函数
    const phone = getFieldValue('phone') //这里的phone是下面的句柄标识符
    // console.log(phone)
    const res = await verifyPhone(phone)
    // console.log(res)//是一个对象,里面有data对象
    // 判断手机号是否注册过
    if (res.data.success) {
      // 没有注册,可以下一步
      Modal.alert(
        '注册协议及隐式政策',
        '我们将发送短信/语音验证码到'+phone,
        [
          {
            text: '不同意',
          },
          {
            text: '同意',
            onPress: () => console.log('ok'),
            style: { backgroundColor: 'red', color: '#fff' },
          },
        ]
      )
    } else {
      // 已经注册过了,需要提示用户
      Toast.fail(res.data.message, 1.5)
    }
  }
  render() {
    const { isDisable } = this.state
    const { getFieldProps } = this.props.form

    return (
      <div>
        <NavBar
          mode='light'
          icon={<Icon type='left' color={'#000'} />}
          onLeftClick={() => {
            console.log('onLeftClick')
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
              <Icon type='down' />
            </div>
          </InputItem>

          <WhiteSpace></WhiteSpace>
          <WhiteSpace></WhiteSpace>
          <WhiteSpace></WhiteSpace>
          {/* 登录 */}
          <WingBlank>
            <Button
              type='warning'
              disabled={isDisable}
              className='login_btn'
              onClick={this.verifyPhoneHandle}
            >
              下一步
            </Button>
            <WhiteSpace />
          </WingBlank>
        </WingBlank>
      </div>
    )
  }
}

export default createForm()(index)
