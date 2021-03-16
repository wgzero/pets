
const db = require("../db/mysql")

const Sequelize = db.sequelize

const Home  = Sequelize.import("../schema/home")

Home.sync({ force: false })


class homeModel{
  // 获取数据列表
  static async getHomeList(val){
    // pageNum pageSize total  分页查询数据
    const res = await Home.findAll({
      limit: [(Number(val.pageNum)-1) * Number(val.pageSize) ,Number(val.pageSize)]
    })
    // 查询总条数
    const total = await Home.count()

    const list = []
    // 遍历循环数据
    for (let i=0; i < res.length ;i++) {
        list.push({
          id: res[i].id,
          imgUrl: res[i].imgUrl,
          nickName: res[i].nickName,
          description: res[i].description,
          pid: res[i].pid
        })
    }
    if(list){
      const data = {
        total,
        pageNum: val.pageNum,
        pageSize: val.pageSize,
        list
      }
      return data 
    }
  }
}

module.exports = homeModel
