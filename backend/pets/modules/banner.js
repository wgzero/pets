// 引进数据库
const db = require("../db/mysql.js")
const moment = require("moment")
const Sequelize = db.sequelize
// 引入建立表
const Banner  = Sequelize.import("../schema/banner.js")
// 建立关系
Banner.sync({ force: false })
// 对数据库操作
class bannerModel {
  // 创建文件上传
  static async createBanner(data){
    // console.log("data---", data)
    const result = await Banner.create({
      address: data,
      createdAt: moment().format(),
      updatedAt: moment().format()
    })
    if(result){
      return result
    }else{
      return false
    }
  }

  // 获取文件上传地址
  static async getBannerImg(){
    // 取出来最新录入的三条数据
    const result = await Banner.findAll({
      order: [['id', 'desc']],
      limit: 3
    })
    return result
  }
}


module.exports = bannerModel 