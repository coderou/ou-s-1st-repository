import React, { Component } from 'react'
import {
  NavBar,
  Icon,
  InputItem,
  WingBlank,
  Button,
  WhiteSpace,
  Modal,
} from 'antd-mobile'

export default class index extends Component {
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
  render() {
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
          <InputItem placeholder='请输入手机号'>
            <div className='inp_phone'>
              <span>+86</span>
              <Icon type='down' />
            </div>
          </InputItem>

          <WhiteSpace></WhiteSpace>
          <WhiteSpace></WhiteSpace>
          <WhiteSpace></WhiteSpace>
          {/* 获取验证码 */}
          <WingBlank>
            <Button type='warning' disabled className='login_btn'>
              登录
            </Button>
            <WhiteSpace />
          </WingBlank>
        </WingBlank>
      </div>
    )
  }
}
