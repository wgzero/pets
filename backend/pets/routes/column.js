// 创建user.js文件
const router = require('koa-router')()
const columnController = require('../controllers/column')


//接口代明
router.prefix('/api')
// 获取栏目列表接口
router.get('/getColumnList', columnController.getColumnList)


module.exports = router
