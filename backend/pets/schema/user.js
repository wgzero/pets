// 创建登录注册表
// 创建login.js文件
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'username',
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'password'
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