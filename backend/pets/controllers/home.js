const homeModel = require("../modules/home")

class homeController{
  static async getHomeList(ctx) {
    // console.log("ctx-----777", ctx.request.query)
    // const req = {
    //   pageNum: ctx.request.body.pageNum,
    //   pageSize: ctx.request.body.pageSize,
    // }
    const req = {
      pageNum: ctx.request.query.pageNum,
      pageSize: ctx.request.query.pageSize,
    }
    const data = await homeModel.getHomeList(req)
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
}

module.exports = homeController
