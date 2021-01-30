// 代码卡片.1.19(jsonp配合模板字符串动态渲染li)
const express = require('express')
const app = express()
let arr = [
  { name: '张飞', gender: '男', info: '粗中有细', },
  { name: '关羽', gender: '男', info: '讲义气', },
  { name: '刘备', gender: '男', info: '编草鞋创业起家', },
  { name: '貂蝉', gender: '女', info: '喜欢吕布', },
  { name: '项羽', gender: '女', info: '辅助/坦克', },
]
app.get('/addLi', (req, res) => {
  const { callback } = req.query
  const arrStr = JSON.stringify(arr)
  res.send(`${callback}(${arrStr})`)
})
app.listen(5000, (err) => {
  if (err) console.log('开启失败', err)
  else console.log('开启成功')
})