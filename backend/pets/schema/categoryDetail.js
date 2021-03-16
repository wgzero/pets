// 创建评论表
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('categoryDetail', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'imgUrl',
    },
    animalName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'animalName',
      comment: '动物名字'
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'description',
      comment: '描述内容'
    },
    pid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'pid',
      comment: '父id'
    },
    discountMoney: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      field: 'discountMoney',
      comment: '打折后的价格'
    },
    money: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      field: 'money',
      comment: '原价'
    },
    sales: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'sales',
      comment: '销售量'
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'type',
      comment: '类型'
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'tag',
      comment: '标签'
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