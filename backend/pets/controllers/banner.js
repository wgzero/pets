const bannerModel = require("../modules/banner")

const fs = require("fs")
const path = require("path")


// 解密token
// const verifyToken = require("../token/verify")

class bannerController {
  // 文件上传接口
  static async fileUpload(ctx) {
    const file = ctx.request.files.file; // 获取上传文件
    // 创建可读流
    const reader = fs.createReadStream(file.path);
    let filePath = path.resolve(__dirname, '../public/uploads/') + `/${file.name}`;
    // 创建可写流
    const upStream = fs.createWriteStream(filePath);
    // 可读流通过管道写入可写流
    reader.pipe(upStream);

    // 获取到图片上传地址
    const uploadAddress = `http://localhost:3000/uploads/${file.name}`

    const list = await bannerModel.createBanner(uploadAddress)


    if (list) {
      ctx.response.status = 200
      ctx.body = {
        code: 200,
        msg: "图片上传成功",
        list
      }
    } else {
      ctx.response.status = 412
      ctx.body = {
        code: 412,
        msg: "图片上传失败",
      }
    }


    // ctx.body = {
    //   filename: ctx.req.file.filename
    // }
  }

  // 获取图片
  static async getBanner(ctx) {
    // let token = ctx.request.header.authorization
    const list = await bannerModel.getBannerImg()
    // console.log("666666-----", ctx.state) // 用来查看token的
    if (list) {
      ctx.response.status = 200
      ctx.body = {
        code: 200,
        msg: "获取数据成功",
        list
      }
      // }
    } else {
      ctx.response.status = 412
      ctx.body = {
        code: 412,
        msg: "获取数据失败",
      }
    }
  }

}


module.exports = bannerController