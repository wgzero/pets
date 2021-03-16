// 创建萌图的数据表
// 创建video文件
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('video', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'imgUrl',
      comment: '头像地址'
    },
    videoUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'videoUrl',
      comment: '视频地址'
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'author',
      comment: '作者'
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'content',
      comment: '内容'
    },
    // 1已点赞 0 还未点赞
    isStar: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '0', // 默认值
      field: 'isStar',
      comment: '是否点赞'
    },
    starNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'starNum',
      defaultValue: 0, // 默认值
      comment: '点赞数量'
    },
    // 1已评论 0 还未评论
    isComment: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'isComment',
      defaultValue: '0', // 默认值
      comment: '是否评论'
    },
    commentNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0, // 默认值
      field: 'commentNum',
      comment: '评论数量'
    },
    isShare: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '0', // 默认值
      field: 'isShare',
      comment: '是否评论'
    },
    shareNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0, // 默认值
      field: 'shareNum',
      comment: '分享数量'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      filed: 'createdAt'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      filed: 'updatedAt'
    },
  })
}