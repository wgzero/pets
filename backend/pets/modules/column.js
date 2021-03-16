// 引进数据库
const db = require("../db/mysql.js")
const moment = require("moment")
const Sequelize = db.sequelize
// 引入建立表
const Column  = Sequelize.import("../schema/column.js")
// 建立关系
Column.sync({ force: false })
// 对数据库操作
class columnModel {
  // 获取栏目列表
  static async getColumnList(){
    let data = await Column.findAll({
      where: {
        isShow: 1
      }
    })
    console.log("getco-----", data)
    if(data){
      return data
    }else{
      return false
    }
  }
}


module.exports = columnModel 