const categoryDetailModel = require("../modules/categoryDetail")

class categoryDetailController{
  // 获取信息
  static async getCategoryDetail(ctx) {
    let list = await categoryDetailModel.getCategoryDetail()
    console.log("list----", list)
    if (list) {
      ctx.response.status = 200
      ctx.body = {
        code: 200,
        msg: "获取成功",
        list
      }
      // }
    } else {
      ctx.response.status = 412
      ctx.body = {
        code: 412,
        msg: "获取失败",
      }
    }
}
}

module.exports = categoryDetailController
