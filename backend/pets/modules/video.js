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

    if (list) {
      return {
        list
      }
    } else {
      return false
    }
  }

  // 对数据点赞评论分享接口
  static async setVideoDetail(val) {
    // 获取到单条数据
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
          isStar: 0
        }, {
          where: {
            id: val.id
          }
        })
      } else {
        isStar = await Video.update({
          isStar: 1
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
          isComment: 0
        }, {
          where: {
            id: val.id
          }
        })
      } else {
        isComment = await Video.update({
          isComment: 1
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
          isShare: 0
        }, {
          where: {
            id: val.id
          }
        })
      } else {
        isShare = await Video.update({
          isShare: 1
        }, {
          where: {
            id: val.id
          }
        })
      }
    }

    // 点赞总数量
    const starNum = await Video.sum("isStar")
    // 评论总数量
    const commentNum = await Video.sum("isComment")
    // 分享总数量
    const shareNum = await Video.sum("isShare")
    // console.log("all---", starNum, commentNum, shareNum)
    // 返回数据
    let list = await Video.findOne({
      where: {
        id: val.id
      }
    })
    // console.log("list---", list)

    // 更新数据
    const isUpdate = await Video.update({
      starNum,commentNum, shareNum
    }, {
      where: {
        id: val.id
      }
    })


    if (list && isUpdate) {
      return {
        list: {
          "id": list.id,
          "imgUrl": list.imgUrl,
          "videoUrl": list.videoUrl,
          "author": list.author,
          "content": list.content,
          "isStar": list.isStar,
          "starNum": starNum,
          "isComment": list.isComment,
          "commentNum": commentNum,
          "isShare": list.isShare,
          "shareNum": shareNum,
          "createdAt": list.createdAt,
          "updatedAt": list.updatedAt
        }
      }
    } else {
      return false
    }
  }
}


module.exports = videoModel 