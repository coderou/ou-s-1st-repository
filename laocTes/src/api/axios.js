/* 
  因为发送请求都要进行一系列控制,所以对axios进行封装
    1.每次发送请求之前,都要对这次发送的请求进行判断,到底该不该发送
    2.所有拿到的数据都要进行拦截,看下问题有没有什么问题
  
*/
import axios from 'axios'
import config from '@/config' //通过config获取baseurl
const baseUrl =
  process.env.NODE_ENV === 'development'
    ? config.baseUrl.dev
    : config.baseUrl.pro

class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
    this.queue = {} //请求队列
  }
  getInsideConfig() {
    //配置:定死的配置写在这里,然后可以将这里的配置和外面的配置进行结合
    const config = {
      baseURL: this.baseUrl,
      header: {
        // 配置全局请求头
      },
    }
    return config
  }
  // 配置:拦截请求
  interceptors(instance, url) {
    instance.interceptors.request.use((config) => {
      // 处理config
      console.log('拦截和处理请求')
      config.data = {
        msg: 'helloWorld',
      }
      console.log(config)
      return config
    })
    // 配置:拦截响应
    instance.interceptors.response.use(
      (res) => {
        // 处理响应
        console.log('处理响应')
        // console.log(res)
        return res.data
      },
      (error) => {
        // 请求出问题,处理问题
        console.log(error)
        return { error: '网络出错了' }
      }
    )
  }
  request(options) {
    const instance = axios.create() //创造实例对象
    // assign可以将两个对象中间的数据进行结合,参数2覆盖参数1
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
    // 这时候只要是经过request请求的,都会经过上面的2个拦截器
  }
}

const axiosObj = new HttpRequest(baseUrl)
export default axiosObj
