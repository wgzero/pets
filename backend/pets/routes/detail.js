// 创建user.js文件
const router = require('koa-router')()
const detailController = require('../controllers/detail')

//接口代明
router.prefix('/api')
// get请求
router.get('/getDetail', detailController.getDetail)
// 设置是否点赞
router.post('/setStarOrCancelDetail', detailController.setStarOrCancelDetail)



module.exports = router
