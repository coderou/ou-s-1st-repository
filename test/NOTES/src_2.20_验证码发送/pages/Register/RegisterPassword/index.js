import React, { Component } from 'react'
import {
  NavBar,
  Icon,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button,
  Modal
} from 'antd-mobile'
import './index.css'
import msg from './msg.png'
export default class VerifyCode extends Component {
  render() {
    return (
      <div className='wrap'>
        <NavBar
          mode='light'
          icon={<Icon type='left' color='#000' />}
          onLeftClick={() => console.log(111)}
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
            <div className='tip'>请设置登录密码</div>
          </WingBlank>
          <WhiteSpace size='lg'></WhiteSpace>

          <div class='code'>
            <InputItem
              className='psw'
              type='password'
              clear
              placeholder='请设置8~20位登录密码'
              extra={<span className='iconfont icon-close-eye'></span>}
            ></InputItem>
          </div>
          <WingBlank size='lg'>
            <div>
              密码由8-20位字母、数字或半角符号组成，不能是10位以下纯数字/字母/半角符号，字母需区分大小写
            </div>
          </WingBlank>
          <WingBlank size='lg'>
            <Button className='code-next' type='warning' disabled={true}>
              完成
            </Button>
          </WingBlank>
          <WingBlank size='lg'>
            遇到问题了?
            <a href=''>请联系客服</a>
          </WingBlank>
        </WingBlank>
      </div>
    )
  }
}
