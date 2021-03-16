const videoModel = require("../modules/video")

const fs = require("fs")
const path  =require("path")


class videoController {
  static async getVideoList(ctx){
    let req = {
      pageNum: ctx.request.body.pageNum,
      pageSize: ctx.request.body.pageSize,
    }
    console.log("req----", req)
    let data = await videoModel.getVideoList(req)
    console.log("data---", data)
    if(data){
      ctx.response.status = 200
      ctx.body = {
        code: 200,
        msg: "查询video成功...",
        data
      }
    }else{
      ctx.response.status = 412
      ctx.body = {
        code: 412,
        msg: "查询video失败...",
        data
      }
    }
  }

  static async setVideoDetail(ctx){
    let req = {
      id: ctx.request.body.id,
      isStar: ctx.request.body.isStar,
      isComment: ctx.request.body.isComment,
      isShare: ctx.request.body.isShare,
    }

    let data = await videoModel.setVideoDetail(req)
    console.log("video----", data)
    let msg
    if(data.isStar && ctx.request.query.isStar == 1){
      if(data.isStar == 1){
        msg = "成功点赞"
      }else{
        msg = "取消点赞"
      }
    }
    if(data.isComment && ctx.request.query.isComment == 1){
      if(data.isComment == 1){
        msg = "成功评论"
      }else{
        msg = "取消评论"
      }
    }
    if(data.isShare  && ctx.request.query.isShare == 1){
      if(data.isShare == 1){
        msg = "成功分享"
      }else{
        msg = "取消分享"
      }
    }
    if(data){
      ctx.response.status = 200
      ctx.body = {
        code: 200,
        msg,
        data
      }
    }else{
      ctx.response.status = 412
      ctx.body = {
        code: 412,
        msg: "查询失败",
        data
      }
    }
  }

}


module.exports = videoController