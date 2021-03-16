const jwt = require('jsonwebtoken');

const secret = "token"

// 生成token
exports.setToken = (username, password) => {
  return new Promise((reslove, reject) => {
    const token = jwt.sign({
      username: username,
      password: password
    }, secret, { expiresIn: "24h" })
    reslove(token)
  }).catch((err) => {
    console.log("setToken-err:" + err)
  })
}


// 解析token
exports.verToken = (token) => {
  return new Promise((resolve, reject) => {
    let userInfo = jwt.verify(token.split(" ")[1], secret)
    resolve(userInfo)
  }).catch((err) => {
    console.log("verifyToken-err:" + err)
  })
}
