const commentModel = require("../modules/comment")



class commentController {
  // 获取评论
  static async getComment(ctx) {
    const req = {
      pid: ctx.request.query.pid,
      pageNum: ctx.request.query.pageNum,
      pageSize: ctx.request.query.pageSize
    }

    if (req.pid) {
      const data = await commentModel.getComment(req)
      if (data) {
        ctx.response.status = 200
        ctx.body = {
          code: 200,
          msg: "获取成功...",
          data
        }
      } else {
        ctx.response.status = 412
        ctx.body = {
          code: 412,
          msg: "获取失败...",
          data
        }
      }
    }
  }

  // 评论
  static async addComment(ctx) {
    const req = {
      content: ctx.request.body.content,
      id: ctx.request.body.id
    }

    const data = await commentModel.addMessage(req)
    if (data) {
      ctx.response.status = 200
      ctx.body = {
        code: 200,
        msg: "评论成功...",
        data
      }
    } else {
      ctx.response.status = 412
      ctx.body = {
        code: 412,
        msg: "评论失败...",
        data
      }
    }

  }

  // 设置是否点赞了
  static async setStarOrCancel(ctx) {
    const req = {
      id: ctx.request.body.id,
      pid: ctx.request.body.pid,
    }

    const data = await commentModel.setStarOrCancel(req)


    
    console.log("data------", data)
    let list = []
    if (data) {
      let msg
      if(data.star == 1){
        msg = "点赞成功..."
        list = {
          isStar: 1
        }
      }else{
        msg = "取消点赞..."
        list = {
          isStar: 0
        }
      }
      ctx.response.status = 200
      ctx.body = {
        code: 200,
        msg,
        list
      }
    } else {
      ctx.response.status = 412
      ctx.body = {
        code: 412,
        msg: "获取点赞失败...",
        data
      }
    }

  }

}


module.exports = commentController