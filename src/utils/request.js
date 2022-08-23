import axios from 'axios'

const request = axios.create({
  baseURL: 'https://pcapi-xiaotuxian-front-devtest.itheima.net'
})

// // request interceptor 请求拦截器
// request.interceptors.request.use(
//   config => {
//     // 如果有token 则已经登录 将token统一放到请求头里
//     // if (store.getters.token) {
//     //   config.headers.Authorization = 'Bearer' + ' ' + getToken()
//     // }
//     // return config
//   },
//   error => {
//     // do something with request error
//     console.log(error) // for debug
//     return Promise.reject(error)
//   }
// )

// response interceptor 响应拦截器
request.interceptors.response.use(
  response => {
    const { result } = response.data
    // if (getActionTime() < ENDTIME && getActionTime()) {
    //   store.dispatch('user/logout')
    // }
    // // 此处可根据 响应状态码判断 实现不同的效果
    // // 当前响应成功 但是请求失败
    // if (!res.success) {
    //   Message({
    //     message: res.message,
    //     type: 'error'
    //   })
    //   return Promise.reject(new Error(res.message))
    // }
    return result
  },
  error => {
    // if (error.message.includes('401')) {
    // if (error.response && error.response.status === 401 && error.response.data.code === 10002) {
    //   store.dispatch('user/logout')
    //   Message({
    //     message: '你的身份信息已过期,请重新登录！',
    //     type: 'error'
    //   })
    // }
    return Promise.reject(error)
  }
)

export default request
