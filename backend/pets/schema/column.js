// 创建栏目数据表 column
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('column', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'name',
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'imgUrl',
    },
    isShow: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'isShow',
      defaultValue: '1', // 默认值 1展示 2不展示
      comment: '是否展示:1展示 2不展示'
    },
    urlAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'urlAddress',
      defaultValue: '1', // 默认值 1展示 2不展示
      comment: '路由地址'
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