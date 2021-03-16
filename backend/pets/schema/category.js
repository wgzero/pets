// 创建登录注册表
// 创建login.js文件
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'name',
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