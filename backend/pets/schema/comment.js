// 创建评论表
// 创建login.js文件
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('comment', {
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
    },
    nickName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'nickName',
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'content',
    },
    // 点赞数量
    star: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'star',
    },// 点赞数量
    pid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'pid',
    },
    show: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'show',
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