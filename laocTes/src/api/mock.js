import Mock from 'mockjs'
import position from '@/api/mockServerData/position'
import index_entry from '@/api/mockServerData/index_entry'
import restaurants from '@/api/mockServerData/restaurants'
// const Mock = require('mock.js');

// 直接写会立即返回数据,有些效果不正常,所以要有一个请求延迟返回操作
// 配置请求延迟
Mock.setup({
  timeout: 500,
})

Mock.mock('/api/posi', position)
Mock.mock('/api/index_entry', index_entry)
Mock.mock('/api/restaurants', restaurants)

//tip:这里是data.js中的user地址
/* Mock.mock('/api/user', {
  username: '老王',
  age: 19,
  gender: '男',
  type: '帅',
}) */

// tip:除了直接使用字符串匹配路径,还可以使用正则匹配路径
/* Mock.mock(/\/api\/user/igs, {
  username: '老王',
  age: 19,
  gender: '男',
  type: '帅',
}) */

/* Mock.mock(/\/api\/user/gis, {
  username: '老王',
  mtime: '@datetime',
  'score|1-800': 800,
  'rank|1-100': 100,
  nickname: '@cname',
  address: '@url',
  imgUrl: '@image',
  email: '@email',
}) */

// Mock.mock('/api/posi', position)
