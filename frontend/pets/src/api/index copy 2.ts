// import { useStore } from "vuex"
// import { GlobalDataProps } from "../store/index"
import request from "@/request/request"
// const store = useStore<GlobalDataProps>()
// console.log("store---", store)
// console.log("api----", process.env.NODE_ENV)
// const BSL = process.env.NODE_ENV == "production" ? "http://petsback.wgzero.com" : "/api"

// const BSL = "/api"
// console.log("BSL",BSL)
// const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjY2NjY2NjExMTIiLCJwYXNzd29yZCI6IjRjMWI1MjQwOWNmNmJlMzg5NmNmMTYzZmExN2IzMmU0ZGEyOTNmMmUiLCJpYXQiOjE2MDkzODE3MjIsImV4cCI6MTYwOTQ2ODEyMn0.95BPZ2Ou8gX_YfzG9U4ISLZog2E7pVxM1MYl8lPi-Vc"
const getToken = localStorage.getItem("token") ? localStorage.getItem("token") : "123"

const token = "Bearer " + getToken
console.log("token---", token)
// params data
// 获取swiper轮播图
export function getBanner(){
  return request({
    url: `/getBanner`,
    method: 'get',
    headers: {
      Authorization: token
    }
  })
}

// 获取栏目数据
export function getColumnList(){
  return request({
    url: `/getColumnList`,
    method: 'get',
    headers: {
      Authorization: token
    }
  })
}

// home-展示列表 getHomeList
export function getHomeList(params: any){
  return request({
    url: `/getHomeList`,
    method: 'get',
    params,
    headers: {
      Authorization: token
    }
  })
}

// home-detail详情页 getHomeList
export function getDetail(params: any){
  return request({
    url: `/getDetail`,
    method: 'get',
    params,
    headers: {
      Authorization: token
    }
  })
}

// home-detail 添加评论
export function addComment(data: any){
  return request({
    url: `/addComment`,
    method: 'post',
    data,
    headers: {
      Authorization: token
    }
  })
}

// 获取评论
export function getComment(params: any){
  return request({
    url: `/getComment`,
    method: 'get',
    params,
    headers: {
      Authorization: token
    }
  })
}

// 主点赞
export function setStarOrCancelDetail(params: any){
  return request({
    url: `/setStarOrCancelDetail`,
    method: 'post',
    params,
    headers: {
      Authorization: token
    }
  })
}

// 网友点赞
export function setStarOrCancel(data: any){
  return request({
    url: `/setStarOrCancel`,
    method: 'post',
    data,
    headers: {
      Authorization: token
    }
  })
}

// category 分类表
export function getCategoryList(){
  return request({
    url: `/getCategoryList`,
    method: 'get',
    headers: {
      Authorization: token
    }
  })
}

// 获取栏目接口详情数据
export function getCategoryDetail(data: any){
  return request({
    url: `/getCategoryDetail`,
    method: 'post',
    data,
    headers: {
      Authorization: token
    }
  })
}

// 登录 login
export function login(data: any){
  return request({
    url: `/login`,
    method: 'post',
    data,
    // headers: {
    //   Authorization: token
    // }
  })
}


// 注册 signin
export function signin(data: any){
  return request({
    url: `/signin`,
    method: 'post',
    data,
    // headers: {
    //   Authorization: token
    // }
  })
}
// 注册验证码登录 signin
export function loginCode(data: any){
  return request({
    url: `/loginCode`,
    method: 'post',
    data,
    // headers: {
    //   Authorization: token
    // }
  })
}

// 获取验证码
export function getCode(){
  return request({
    url: `/getCode`,
    method: 'get',
    // headers: {
    //   Authorization: token
    // }
  })
}