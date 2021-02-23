import React, { Component } from 'react'
import './index.css'
import { NavBar, Icon, List, SearchBar } from 'antd-mobile'
import { getCountryData } from '../../api/country'
const Item = List.Item

export default class Country extends Component {
  state = {
    countryListP: {}, //定义:国家列表数据
    countryList: {}, //定义:国家列表数据(筛选后)
    value: '',
  }
  async componentDidMount() {
    const res = await getCountryData() //定义:拿到国家列表数据
    // console.log(res)
    this.setState({
      countryListP: res.data.data,
      countryList: res.data.data,
    })
  }
  // @@@@@@@@@@@@想要尝试做一个搜索筛选功能
  test = (text) => {
    /* console.log(text)
    console.log(this.state.countryList);
    Object.keys(text).forEach(i=>{
      i.forEach(i=>{
        console.log(i);
      })
    })
    this.setState({ value: text }) */
  }
  render() {
    const { countryList } = this.state
    const listArr = Object.keys(countryList)
    return (
      <div>
        {/* 导航栏 */}
        <NavBar
          mode='light'
          icon={<Icon type='left' color={'#000'} />}
          onLeftClick={() => {
            console.log('你点击了返回按钮')
          }}
        >
          硅谷注册登录
        </NavBar>

        {/* 搜索框(效果未完成) */}
        <SearchBar onChange={this.test} placeholder='Search' maxLength={8} />

        {/* 导航栏 */}
        <div className='countryNavBar'>
          {listArr.map((i) => {
            return (
              <a
                onClick={() => {
                  // 找到要展示的那个list的dom对象
                  const ele = document.getElementById(i)
                  ele.scrollIntoView() //dom原生的方法,将视图滚动到对应的地方
                }}
                key={i}
              >
                {i}
              </a>
            )
          })}
        </div>

        {/* 根据listAtt动态渲染列表 */}
        {listArr.map((i) => {
          const itemArr = countryList[i]
          return (
            <List id={i} key={i} renderHeader={() => i} className='my-list'>
              {itemArr.map((item, index) => {
                const key = Object.keys(item)[0]
                return (
                  <Item
                    onClick={() => {
                      this.props.history.replace(
                        this.props.location.state.from,
                        { country: item[key] }
                      )
                    }}
                    key={index}
                    extra={item[key]}
                  >
                    {key}
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
