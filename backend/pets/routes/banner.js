// 创建user.js文件
const router = require('koa-router')()
const bannerController = require('../controllers/banner')


//接口代明
router.prefix('/api')
// 登录注册接口
router.post('/fileUpload', bannerController.fileUpload)

router.get('/getBanner', bannerController.getBanner)
// banner获取图片接口


module.exports = router
