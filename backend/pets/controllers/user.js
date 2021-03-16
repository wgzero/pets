const userModel = require("../modules/user")
// 密码加密
const sha1 = require("sha1")
const fs = require("fs")
const path = require("path")

// svg
const svgCaptcha = require('svg-captcha');
const session = require("koa-session")
// token
const setToken = require("../token/verify")


class userController {
  // 注册
  static async signin(ctx) {
    // console.log("8888", ctx.session.code)
    const req = {
      username: ctx.request.body.username,
      password: sha1(ctx.request.body.password)
    }
    // if (ctx.request.body.username || ctx.request.body.password) {
    //   ctx.body = {
    //     code: 301,
    //     msg: "用户名、密码、验证码不能为空"
    //   }
    // }
    // if (ctx.request.body.password == ctx.session.code) {
    if (req.username && req.password) {
      const created = await userModel.createUser(req)
      let token = await setToken.setToken(req.username, req.password)
      if (created) {
        ctx.response.status = 200
        ctx.body = {
          code: 200,
          msg: "注册成功...",
          token
        }
      } else {
        ctx.response.status = 412
        ctx.body = {
          code: 412,
          msg: "注册失败,用户名已存在"
        }
      }
    }
  }
  // 登录
  static async login(ctx) {
    // console.log("ctx---", ctx.session.code)
    const req = {
      username: ctx.request.body.username,
      password: sha1(ctx.request.body.password)
    }

    const data = await userModel.userLogin(req)
    let token = await setToken.setToken(req.username, req.password)
    // console.log("log---", data)

    if (data) {
      ctx.response.status = 200
      data.password = "******"
      ctx.body = {
        code: 200,
        msg: "登录成功",
        data: token
      }
    } else {
      ctx.response.status = 300
      ctx.body = {
        code: 300,
        msg: "用户名或密码错误"
      }
    }
  }

  // 修改个人信息 form-data传递数据: 图片和json一起传递参数
  static async updateUserInfo(ctx) {
    // 获取到图片上传地址
    const file = ctx.request.files.file; // 获取上传文件
    // 创建可读流
    const reader = fs.createReadStream(file.path);
    let filePath = path.resolve(__dirname, '../public/uploads/') + `/${file.name}`;
    // 创建可写流
    const upStream = fs.createWriteStream(filePath);
    // 可读流通过管道写入可写流
    reader.pipe(upStream);

    // 获取到图片上传地址
    const imgUrl = `http://localhost:3000/uploads/${file.name}`
    console.log("update-ctx", imgUrl)

    const res = {
      username: ctx.request.body.username,
      password: sha1(ctx.request.body.password),
      imgUrl: imgUrl,
      nickName: ctx.request.body.nickName
    }
    if (res.username && res.password && res.imgUrl && res.nickName) {
      const data = await userModel.updateUserInfo(res)
      if (data) {
        ctx.response.status = 200
        ctx.body = {
          code: 200,
          msg: "修改成功...",
          data
        }
      } else {
        ctx.response.status = 412
        ctx.body = {
          code: 412,
          msg: "修改失败...",
          data
        }
      }
    }
  }

  // 获取验证码
  static async getCode(ctx) {
    let codeConfig = {
      size: 5,// 验证码长度
      ignoreChars: '0o1i', // 验证码字符中排除 0o1i
      noise: 2, // 干扰线条的数量
      height: 44
    }
    let captcha = svgCaptcha.create(codeConfig);
    console.log("----getCode", captcha)
    // ctx.session.captcha = captcha.text.toLowerCase(); //存session用于验证接口获取文字码
    ctx.type = "svg"
    ctx.session.code = captcha.text
    console.log("ctx---", captcha.text)
    // ctx.body = captcha.data // 图片验证码
    ctx.body = {
      code: 200,
      msg: captcha.text
    }
  }

  // 验证码直接登录
  static async loginCode(ctx) {
    console.log("8888", ctx.session.code)
    const req = {
      username: ctx.request.body.username,
      password: sha1(ctx.request.body.password)
    }
    if (ctx.request.body.username || ctx.request.body.password) {
      ctx.body = {
        code: 301,
        msg: "用户名和验证码不能为空"
      }
    }
    if (ctx.request.body.password == ctx.session.code) {
      if (req.username && req.password) {
        const created = await userModel.loginCode(req)
        // console.log("created--", created)
        let token = await setToken.setToken(req.username, req.password)
        if (created == 1) {
          ctx.response.status = 200
          ctx.body = {
            code: 200,
            msg: "注册成功...",
            token
          }
        } else if (created == 2) {
          ctx.response.status = 200
          ctx.body = {
            code: 200,
            msg: "登录成功...",
            token
          }
        } else {
          ctx.response.status = 412
          ctx.body = {
            code: 412,
            msg: "注册失败,用户名已存在"
          }
        }
      }
    } else {
      ctx.body = {
        code: 301,
        msg: "验证码错误"
      }
    }
  }

}


module.exports = userController