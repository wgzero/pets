import request from "@/request/request"

// params data
// 获取swiper轮播图
export function getBanner(){
  return request({
    url: `/getBanner`,
    method: 'get'
  })
}

// 获取栏目数据
export function getColumnList(){
  return request({
    url: `/getColumnList`,
    method: 'get'
  })
}

// home-展示列表 getHomeList
export function getHomeList(params: any){
  return request({
    url: `/getHomeList`,
    method: 'get',
    params
  })
}

// home-detail详情页 getHomeList
export function getDetail(params: any){
  return request({
    url: `/getDetail`,
    method: 'get',
    params
  })
}

// home-detail 添加评论
export function addComment(data: any, token: string){
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
    params
  })
}

// 主点赞
export function setStarOrCancelDetail(params: any, token: string){
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
export function setStarOrCancel(data: any, token: string){
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
    method: 'get'
  })
}

// 获取栏目接口详情数据
export function getCategoryDetail(data: any){
  return request({
    url: `/getCategoryDetail`,
    method: 'post',
    data
  })
}

// 登录 login
export function login(data: any){
  return request({
    url: `/login`,
    method: 'post',
    data
  })
}


// 注册 signin
export function signin(data: any){
  return request({
    url: `/signin`,
    method: 'post',
    data
  })
}
// 注册验证码登录 signin
export function loginCode(data: any){
  return request({
    url: `/loginCode`,
    method: 'post',
    data
  })
}

// 获取验证码
export function getCode(){
  return request({
    url: `/getCode`,
    method: 'get'
  })
}

// video 获取视频
export function getVideoList(data: any){
  return request({
    url: `/getVideoList`,
    method: 'post',
    data
  })
}
// video 设置点赞、评论、分享
export function setVideoDetail(data: any){
  return request({
    url: `/setVideoDetail`,
    method: 'post',
    data
  })
}