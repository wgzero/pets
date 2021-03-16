import axios from "axios"
import { Toast } from 'vant'

// 线上地址
// axios.defaults.baseURL = "/api/api"
// 本地地址
axios.defaults.baseURL = "/api"


const service = axios.create({
  timeout: 5000
})
// Toast("hello vue3")
service.interceptors.request.use(
  (config) => {
    return config
  }, 
  (error) => {
    Promise.reject(error)
})

service.interceptors.response.use(
  (res) => res.data, (error) => {
    Toast(`${error}`)
    return Promise.reject(error)
  } )

  export default service