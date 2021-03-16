// 引进数据库
const db = require("../db/mysql.js")
const moment = require("moment")
const Sequelize = db.sequelize
// 引入建立表
const Category = Sequelize.import("../schema/category.js")
const CategoryDetail = Sequelize.import("../schema/categoryDetail.js")
// 建立关系
Category.sync({ force: false })
CategoryDetail.sync({ force: false })
// 对数据库操作
class categoryModel {
  // 分类列表左右菜单栏数据
  static async getCategoryList() {
    // 3
    let resLeft = await Category.findAll()
    // 5
    let res = []
    let list = []
    for (let i = 0; i < resLeft.length; i++) {
      let resRight = await CategoryDetail.findAll({
        where: {
          pid: resLeft[i].id
        },
        // 选取字段数据返回
        attributes: ['id','pid', 'imgUrl', 'animalName']
      })


      res.push({ id: resLeft[i].id, name: resLeft[i].name, list: resRight })
    }


    if (res) {
      return res
    } else {
      return false
    }
  }

  // 查询分类数据详情 通过分类id+点击id来查出数据详情
  static async getCategoryDetail(val){
    let res = await CategoryDetail.findOne({
      where: {
        id: val.id,
        pid: val.pid
      }
    })

    if(res){
      return res
    }else{
      return false
    }
  }

}
module.exports = categoryModel 