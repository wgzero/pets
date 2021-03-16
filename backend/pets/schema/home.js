// 创建home表
// 创建home.js文件
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('home', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      // 是否自增
      autoIncrement: true
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'imgUrl',
      comment: '图片地址'
    },
    nickName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'nickName',
      comment: '昵称'
    },
    // 浏览数
    browse: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'browse',
    },
    // 内容
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'content',
    }, 
    // 标题
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'title',
    }, 
    // pid 关联id
    pid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'pid'
    }, 
    star: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '0', // 默认值
      field: 'star'
    },
    starNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'starNum'
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'description'
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