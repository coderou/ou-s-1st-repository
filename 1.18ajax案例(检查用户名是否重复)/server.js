//代码卡片:1.18(ajax查询名字是否重复)
const express = require('express');
const app = express()
app.use(express.static('public'))//使用静态服务器
app.use(express.urlencoded({ extended: true }))//postbody解析器
app.post('/checkname', (req, res) => {
  const { name } = req.body
  let arr = ['佩奇', '刘杰', '高一']
  if (arr.includes(name)) {
    res.send('no')
  } else {
    res.send('ok')
  }
})
app.listen(5000)

