const categoryModel = require("../modules/category")

class categoryController{
  // 获取栏目数据接口
  static async getCategoryList(ctx){
    const data = await categoryModel.getCategoryList()
    if (data) {
      ctx.response.status = 200
      ctx.body = {
        code: 200,
        msg: "栏目获取成功...",
        data
      }
    } else {
      ctx.response.status = 412
      ctx.body = {
        code: 412,
        msg: "栏目获取失败...",
        data
      }
    }
  }

  // 查询分类数据详情
  static async getCategoryDetail(ctx){
    let req = {
      id: ctx.request.body.id,
      pid: ctx.request.body.pid
    }
    const data = await categoryModel.getCategoryDetail(req)
    if (data) {
      ctx.response.status = 200
      ctx.body = {
        code: 200,
        msg: "获取栏目详情成功...",
        data
      }
    } else {
      ctx.response.status = 412
      ctx.body = {
        code: 412,
        msg: "获取栏目详情失败...",
        data
      }
    }
  }
}

module.exports = categoryController
