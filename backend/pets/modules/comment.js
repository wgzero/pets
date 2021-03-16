// 评论表
const db = require("../db/mysql.js")
const Sequelize = db.sequelize
const moment = require("moment")
// 引入建立表
const Comment  = Sequelize.import("../schema/comment.js")
// 建立关系
Comment.sync({ force: false })
// 对数据库操作
class commentModel {
  // 获取评论
  static async getComment(val){
    // console.log("data---", data)
    const list = await Comment.findAll({
      where: {
        pid: val.pid
      },
      // 排序
      order: [['id', 'desc']],
      limit: [(Number(val.pageNum)-1) * Number(val.pageSize) ,Number(val.pageSize)]
    })

    // 查询总条数
    const total = await Comment.count({ where: {
      pid: val.pid
    } })
    if(list){
      const data = {
        total,
        list
      }
      return data
    }else{
      return false
    }
  }

  // 插入数据留言： 评论
  static async addMessage(val){


    const list = await Comment.create({
      imgUrl: "http://baidu.com",
      nickName: "小沐",
      content: val.content,
      pid: val.id,
      star: "0",
      show: true,
      createdAt: moment().format(),
      updatedAt: moment().format()
    })

    if(list){
      return true
    }else{
      return false
    }
  }


  // 点赞 确认 总数+1 确认返回 true
  // 点赞 取消 总数-1 确认 返回 false
  static async setStarOrCancel(val){
    // 先取出来数据的点赞
    const res = await Comment.findOne({
      where: {
        id: val.id,
        pid: val.pid
      }
    })
    let flag = res.star
    let isShow
    // 判断是否选中了
    if(flag == 1){
      isShow = await Comment.update({
        star: 0
       },{
        where: {
          id: val.id,
          pid: val.pid
        }
       })
    }else{
      isShow = await Comment.update({
        star: 1
       },{
        where: {
          id: val.id,
          pid: val.pid
        }
       })
    }
    // 查询数据并返回给前端
    const result = await Comment.findOne({
      where: {
        id: val.id,
        pid: val.pid
      }
    })

    if(result){
      return result 
    }else{
      return false
    }
  }

}


module.exports = commentModel 