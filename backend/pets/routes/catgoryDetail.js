// 创建user.js文件
const router = require('koa-router')()
const categoryDetailController = require('../controllers/categoryDetail')


//接口代明
router.prefix('/api')
router.get('/getCategoryDetail', categoryDetailController.getCategoryDetail)


module.exports = router
