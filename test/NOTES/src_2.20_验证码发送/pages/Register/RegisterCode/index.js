import React, { Component } from 'react'
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
export default class VerifyCode extends Component {
  async componentDidMount() {
    // 获取localStorage里面存储的手机号
    const phone = localStorage.getItem('phone')
    // console.log(phone);
    const res = await sendCode(phone)
    // console.log(res);
    if (res.data.success) {
      Toast.success('ლ(′◉❥◉｀ლ)验证码已经发送到您的手机', 2)
      // 倒计时
      
    }
  }

  render() {
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
            <InputItem clear placeholder='请输入手机验证码'></InputItem>
            <button className='code-btn'>重新发送(40s)</button>
          </div>
          <WingBlank size='lg'>
            <Button className='code-next' type='warning' disabled={true}>
              下一步
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
