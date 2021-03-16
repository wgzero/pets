// 引进数据库
const db = require("../db/mysql.js")
const moment = require("moment")
const Sequelize = db.sequelize
// 引入建立表
const Video = Sequelize.import("../schema/video.js")
// 建立关系
Video.sync({ force: false })
// 对数据库操作
class videoModel {
  // 获取视频数据列表 isStar isComment isShare pageNum pageSize
  static async getVideoList(val) {
    const list = await Video.findAll({
      limit: [(Number(val.pageNum) - 1) * Number(val.pageSize), Number(val.pageSize)],
      order: [['id', 'desc']]
    })
    // 查询总条数
    const total = await Video.count()
    // 点赞总数量
    const starNum = await Video.sum("starNum")
    // 评论总数量
    const commentNum = await Video.sum("commentNum")
    // 分享总数量
    const shareNum = await Video.sum("shareNum")
    if (list) {
      return {
        total,
        starNum,
        commentNum,
        shareNum,
        list
      }
    } else {
      return false
    }
  }

  // 对数据点赞评论分享接口
  static async setVideoDetail(val) {
    const res = await Video.findOne({
      where: {
        id: val.id
      }
    })
    // 点赞
    let isStar
    if (val.isStar == 1) {
      if (res.isStar == 1) {
        isStar = await Video.update({
          isStar: 0,
          starNum: 0
        }, {
          where: {
            id: val.id
          }
        })
      } else {
        isStar = await Video.update({
          isStar: 1,
          starNum: 1
        }, {
          where: {
            id: val.id
          }
        })
      }
    }
    // 评论
    let isComment
    if (val.isComment == 1) {
      if (res.isComment == 1) {
        isComment = await Video.update({
          isComment: 0,
          commentNum: 0
        }, {
          where: {
            id: val.id
          }
        })
      } else {
        isComment = await Video.update({
          isComment: 1,
          commentNum: 1
        }, {
          where: {
            id: val.id
          }
        })
      }
    }
    // 分享
    let isShare
    if (val.isShare == 1) {
      if (res.isShare == 1) {
        isShare = await Video.update({
          isShare: 0,
          shareNum: 0
        }, {
          where: {
            id: val.id
          }
        })
      } else {
        isShare = await Video.update({
          isShare: 1,
          shareNum: 1
        }, {
          where: {
            id: val.id
          }
        })
      }
    }

    // 返回数据
    let list = await Video.findOne({
      where: {
        id: val.id
      }
    })
    console.log("list---", list)
    if (list) {
      return list
    } else {
      return false
    }
  }
}


module.exports = videoModel 