// 创建user.js文件
const router = require('koa-router')()
const commentController = require('../controllers/comment')

//接口代明
router.prefix('/api')
// 获取首页数据
// router.post('/getHomeList', homeController.getHomeList)
// get请求
router.get('/getComment', commentController.getComment)
// 网友评论
router.post('/addComment', commentController.addComment)
// setStarOrCancel
router.post('/setStarOrCancel', commentController.setStarOrCancel)




module.exports = router
