import React, { Component } from 'react'
import { createForm } from 'rc-form'
import { register } from '../../../api/register'
import {
  NavBar,
  Icon,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button,
  Toast
} from 'antd-mobile'
import './index.css'
import msg from './msg.png'
class VerifyPassword extends Component {
  state = {
    closeEye: true,
    NoRegist: true,
  }
  validator = (rules, value) => {
    console.log(value)
    if (/^[\w]{8,16}$/.test(value)) {
      this.setState({ NoRegist: false })
    } else {
      this.setState({ NoRegist: true })
    }
  }
  changeEye = () => {
    this.setState({ closeEye: !this.state.closeEye })
  }
  registUser = async () => {
    const phone = localStorage.getItem('phone')
    const password = this.props.form.getFieldValue('password')
    const res=await register(phone, password)
    if(res.data.success){
      Toast.success('注册成功',2)
      setTimeout(i=>{
        this.props.history.replace('/login')//
      },2000)
    }else{
      alert('未知错误')
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
            this.props.history.replace('/register/code', {
              from: '/register/password',
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
            <div className='tip'>请设置登录密码</div>
          </WingBlank>
          <WhiteSpace size='lg'></WhiteSpace>

          <div className='code'>
            <InputItem
              {...getFieldProps('password', {
                rules: [
                  {
                    validator: this.validator,
                  },
                ],
              })}
              className='psw'
              type={this.state.closeEye ? 'password' : 'text'}
              clear
              placeholder='请设置8~20位登录密码'
              extra={
                <span
                  onClick={this.changeEye}
                  className={
                    this.state.closeEye
                      ? 'iconfont icon-close-eye'
                      : 'iconfont icon-yanjing'
                  }
                ></span>
              }
            ></InputItem>
          </div>
          <WingBlank size='lg'>
            <div>
              密码由8-20位字母、数字或半角符号组成，不能是10位以下纯数字/字母/半角符号，字母需区分大小写
            </div>
          </WingBlank>
          <WingBlank size='lg'>
            <Button
              className='code-next'
              type='warning'
              onClick={this.registUser}
              disabled={this.state.NoRegist}
            >
              完成
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

export default createForm()(VerifyPassword)
