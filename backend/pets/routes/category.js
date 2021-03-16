// 创建user.js文件
const router = require('koa-router')()
const categoryController = require('../controllers/category')
//接口代明
router.prefix('/api')
// 分类查询接口
router.get('/getCategoryList', categoryController.getCategoryList)
// 分类查询详情接口
router.post('/getCategoryDetail', categoryController.getCategoryDetail)


module.exports = router
