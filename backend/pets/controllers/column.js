const columnModel = require("../modules/column")


class columnController {


  // 获取栏目列表
  static async getColumnList(ctx) {
      let list = await columnModel.getColumnList()
      console.log("list----", list)
      if (list) {
        ctx.response.status = 200
        ctx.body = {
          code: 200,
          msg: "获取栏目成功",
          list
        }
        // }
      } else {
        ctx.response.status = 412
        ctx.body = {
          code: 412,
          msg: "获取栏目失败",
        }
      }
  }

}


module.exports = columnController