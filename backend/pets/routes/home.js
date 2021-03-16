// 创建user.js文件
const router = require('koa-router')()
const homeController = require('../controllers/home')

//接口代明
router.prefix('/api')
// 获取首页数据
// router.post('/getHomeList', homeController.getHomeList)
// get请求
router.get('/getHomeList', homeController.getHomeList)



module.exports = router
