
const db = require("../db/mysql")

const Sequelize = db.sequelize

const Detail  = Sequelize.import("../schema/detail")
const Home  = Sequelize.import("../schema/home")
const moment = require("moment")

Detail.sync({ force: false })


class detailModel{
  // 获取数据列表
  static async getDetail(val){
    // 对页面浏览数据+1
    const num = await Home.findOne({
      where: {
        id: val.id
      }
    })
    // console.log("getDetail---", num.browse)

    const detail = await Home.update({
      browse: num.browse + 1,
      updatedAt: moment().format()
    },{
      where: {
        id: val.id
      }
    })

    // 通过id查询详情数据
    const list = await Home.findOne({
      where: {
        id: val.id
      }
    })
    if(detail&&list){
        const data = {
          list
        }
        return data 
    }else{
      return false
    }
  }

  // 点赞 确认 总数+1 确认返回 true
  // 点赞 取消 总数-1 确认 返回 false
  static async setStarOrCancelDetail(val){
    // 先取出来数据的点赞
    const res = await Home.findOne({
      where: {
        id: val.id
      }
    })
    let flag = res.star
    let isShow
    // 判断是否选中了
    if(flag == 1){
      isShow = await Home.update({
        star: 0
       },{
        where: {
          id: val.id
        }
       })
    }else{
      isShow = await Home.update({
        star: 1
       },{
        where: {
          id: val.id
        }
       })
    }
    // 查询数据并返回给前端
    const result = await Home.findOne({
      where: {
        id: val.id
      }
    })

    if(result){
      return result 
    }else{
      return false
    }
  }
  
}

module.exports = detailModel
