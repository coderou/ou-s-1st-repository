// 1.引入http模块
const http = require('http');
// 2.创建服务器对象
let arr = [
  { name: '张飞', gender: '男', info: '粗中有细', },
  { name: '关羽', gender: '男', info: '讲义气', },
  { name: '刘备', gender: '男', info: '编草鞋创业起家', },
  { name: '貂蝉', gender: '女', info: '喜欢吕布', },
  { name: '项羽', gender: '女', info: '辅助/坦克', },
]
const server = http.createServer((req, res) => {
  /* console.log(req.url)//打印传递过来地址值?查询字符串
  const path = req.url
  const arr = path.split('?')[1].split('&')
  const reqObj = {}
  arr.forEach((i) => {
    const key = i.split('=')[0]
    const value = i.split('=')[1]
    reqObj[key] = value
  }) */
  const path = req.url
  const callback = path.split('?')[1].split('=')[0]
  const fn = path.split('?')[1].split('=')[1]
  // console.log(callback)
  const arrStr = JSON.stringify(arr)




  res.setHeader('content-type', 'text/html;charset=utf-8')

  /* res.end(`<h3>你是${reqObj.name}</h3><p>你的年龄是${reqObj.age}</p>`) */
  res.end(`${fn}(${arrStr})`)
})
// 3.监听服务器
server.listen(5000, (err) => {
  if (err) console.log(err)
  else console.log('启动成功')
})