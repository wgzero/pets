// 创建登录注册表
// 创建login.js文件
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('detail', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'title',
    },
    browse: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'browse'
    },
    nickName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'nickName'
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'imgUrl'
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'content'
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