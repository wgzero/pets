const detailModel = require("../modules/detail")

class detailController{
  // 获取数据详情
  static async getDetail(ctx) {
    const req = {
      id: ctx.request.query.id
    }
    const data = await detailModel.getDetail(req)
    if(data){
      ctx.response.status = 200
      ctx.body = {
        code: 200,
        msg: "查询成功...",
        data
      }
    }else{
      ctx.response.status = 412
      ctx.body = {
        code: 412,
        msg: "查询失败...",
        data
      }
    }
  }

  // 设置是否点赞了
  static async setStarOrCancelDetail(ctx) {
    const req = {
      id: ctx.request.body.id
    }
    const data = await detailModel.setStarOrCancelDetail(req)

    console.log("data------", data)
    if (data) {
      let msg
      if(data.star == 1){
        msg = "点赞成功..."
      }else{
        msg = "取消点赞..."
      }
      ctx.response.status = 200
      ctx.body = {
        code: 200,
        msg,
        result: true
      }
    } else {
      ctx.response.status = 412
      ctx.body = {
        code: 412,
        msg: "获取点赞失败...",
        data
      }
    }

  }
}

module.exports = detailController
