// 引进数据库
const db = require("../db/mysql.js")
const moment = require("moment")
const Sequelize = db.sequelize
// 引入建立表
const CategoryDetail  = Sequelize.import("../schema/categoryDetail.js")
// 建立关系
CategoryDetail.sync({ force: false })
// 对数据库操作
class categoryDetailModel {
  static async getCategoryDetail(){
    let data = CategoryDetail.findAll()
    if(data){
      return data 
    }else{
      return false
    }
  }
}


module.exports = categoryDetailModel 