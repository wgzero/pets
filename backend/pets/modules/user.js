const db = require("../db/mysql.js")
const Sequelize = db.sequelize

const User = Sequelize.import("../schema/user.js")
const moment = require("moment")
User.sync({ force: false })

class userModel {
  // 增创建用户数据 
  static async createUser(data) {
    // 是否存在用户名
    const result = await User.findOne({
      where: {
        username: data.username
      }
    })
    // 随机产生1-10的数字
    // 随机创建昵称
    const nickNameUser = ["小沐", "小鱼", "老狗", "小喵", "小鼠", "老牛", "花猫", "花猪", "龟仙", "懒熊"]
    const num = Math.ceil(Math.random(nickNameUser.length) * 10) - 1
    const nickNameRes = nickNameUser[num]
    // 随机创建图片
    const imgUrlRandom = "http://localhost:3000/nickName/" + num + ".jpg"
    // 如果不存在就插入到数据库中

    if (!result) {
      await User.create({
        username: data.username,
        password: data.password,
        imgUrl: imgUrlRandom,
        nickName: nickNameRes,
        createdAt: moment().format(),
        updatedAt: moment().format()
      })
      return true
    } else {
      return false
    }
  }

  // 查登录token
  static async userLogin(data) {
    const result = await User.findOne({
      where: {
        username: data.username,
        password: data.password
      }
    })
    console.log("xxxx-login", result)
    if (result) {
      return result
    }
  }

  // 改：修改个人信息
  static async updateUserInfo(data) {
    // 修改数据
    const result = User.update({
      username: data.username,
      password: data.password,
      imgUrl: data.imgUrl,
      nickName: data.nickName,
      updatedAt: moment().format()
    }, {
      where: {
        username: data.username
      }
    })

    // 查询修改之后的数据
    const updateData = User.findOne({
      where: {
        username: data.username
      }
    })
    if (result) {
      if (updateData) {
        return true
      }
    } else {
      return false
    }
  }

  // 验证码直接登录
  static async loginCode(data) {
    // 是否存在用户名
    const result = await User.findOne({
      where: {
        username: data.username
      }
    })
    // 随机产生1-10的数字
    // 随机创建昵称
    const nickNameUser = ["小沐", "小鱼", "老狗", "小喵", "小鼠", "老牛", "花猫", "花猪", "龟仙", "懒熊"]
    const num = Math.ceil(Math.random(nickNameUser.length) * 10) - 1
    const nickNameRes = nickNameUser[num]
    // 随机创建图片
    const imgUrlRandom = "http://localhost:3000/nickName/" + num + ".jpg"


    // 更新数据
    // console.log("5555---", result)
    if (!result) {
      // 新增数据
      await User.create({
        username: data.username,
        password: data.password,
        imgUrl: imgUrlRandom,
        nickName: nickNameRes,
        createdAt: moment().format(),
        updatedAt: moment().format()
      })
      return 1
    } else {
      await User.update({
        password: data.password
      },{
        where: {
          username: data.username
        }
      })
      return 2
    }
  }
}


module.exports = userModel