import React, { Component } from 'react'
import { List, NavBar, Icon } from 'antd-mobile'
import { getCountry } from '../../api/country'
import './index.css'
const Item = List.Item

export default class country extends Component {
  state = {
    countryList: [],
  }

  async componentDidMount() {
    const res = await getCountry()
    this.setState({ countryList: res.data.data })
    // console.log(this.state.countryList)
  }
  chooseCountry = (data) => () => {
    const countryCode = data
    localStorage.setItem('countryCode', countryCode)
    this.props.history.replace(this.props.location.state.from, {
      from: '/country',
      countryCode: data,
    })
  }
  render() {
    const { countryList } = this.state
    const { chooseCountry } = this
    return (
      <div>
        {/* 导航栏 */}
        <NavBar
          mode='light'
          icon={<Icon type='left' color={'#000'} />}
          onLeftClick={() => {
            this.props.history.replace(this.props.location.state.from, {
              from: '/country',
            })
          }}
        >
          硅谷注册登录
        </NavBar>

        {/* 导航 */}
        <div className='countryNavBar'>
          {Object.keys(countryList).map((i) => {
            return (
              <span
                onClick={() => {
                  const ele = document.getElementById(i)
                  ele.scrollIntoView()
                }}
                key={i}
              >
                {i}
              </span>
            )
          })}
        </div>

        {/* 动态渲染列表 */}
        {Object.keys(countryList).map((item) => {
          return (
            <List
              id={item}
              key={item}
              renderHeader={() => item}
              className='my-list'
            >
              {countryList[item].map((i, j) => {
                return (
                  <Item
                    onClick={chooseCountry(i[Object.keys(i)])}
                    extra={i[Object.keys(i)]}
                    key={j}
                  >
                    {Object.keys(i)}
                  </Item>
                )
              })}
            </List>
          )
        })}
      </div>
    )
  }
}
