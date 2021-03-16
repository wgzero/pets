// 创建user.js文件
const router = require('koa-router')()
const userController = require('../controllers/user')

//接口代明
router.prefix('/api')
// 注册接口
router.post('/signin', userController.signin)
// 登录接口
router.post('/login', userController.login)
// 修改信心接口
router.post('/updateUserInfo', userController.updateUserInfo)
// 获取验证码 getCode loginCode
router.get('/getCode', userController.getCode)
// 验证码直接登录
router.post('/loginCode', userController.loginCode)
// 下载pdf
// router.get('/pdfDownload', userController.pdfDownload)



module.exports = router
