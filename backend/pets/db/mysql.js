// 创建数据库
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// 数据表 用户名  密码
const sequelize = new Sequelize('pets', 'root', '123456', {
  // host: 'localhost',
  host: '127.0.0.1',
  dialect: 'mysql',
  port:3306,
  dialectOptions: {
    supportBigNumbers: true,
    bigNumberStrings: true
  },
  //搜索功能的like
  operatorsAliases: { $like: Op.like },
  define: {
    //字符集
    charset: 'utf8',
    //时间戳
    timestamps: false,
    dialectOptions: {
      collate: 'utf8_general_ci'
    }
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  timezone: '+08:00' //东八时区
});

module.exports = {
  sequelize
}