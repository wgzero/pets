// 创建user.js文件
const router = require('koa-router')()
const videoController = require('../controllers/video')


//接口代明
router.prefix('/api')
// 获取视频的数据list
router.post('/getVideoList', videoController.getVideoList)
// 点赞 评论 分享
router.post('/setVideoDetail', videoController.setVideoDetail)


module.exports = router
