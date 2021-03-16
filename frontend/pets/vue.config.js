const path = require("path")
const resolve = (dir) => path.join(__dirname, dir);

// console.log("---", process.env.NODE_ENV, process.env.VUE_BASE_URL)
module.exports = {
  lintOnSave: false,
  // 打包是否生成.map文件
  productionSourceMap: false,
  // 使用哪个环境
  publicPath: process.env.NODE_ENV == "production" ? "./" : "/" ,
  devServer: {
    open: false, // auto open brower 项目启动后自动打开浏览器...
    disableHostCheck: false,
    host: '0.0.0.0',
    port: 8085, // 修改端口号
    https: false,
    hotOnly: false, 
    proxy: { // string | Object 解决跨域问题 /api 会自己添加上去
      '/api': {
        target: process.env.VUE_BASE_URL, // 对应自己的 跨域地址 即请求的后端地址
        // target: "http://pets.wgzero.com/api", // 对应自己的 跨域地址 即请求的后端地址
        changeOrigin: true,
        ws: true
      }
    }
  },
  chainWebpack: config => {
    // 设置打包大小
    config.performance .set('hints', false);
    // 设置title
    config.plugin("html").tap(args => {
      args[0].title = "宠萌"
      return args
    })
    // 设置别名
    config.resolve.alias
      .set("api", resolve("src/api"))
  },
  // 代码拆分
  configureWebpack: config => {
    config.optimization = {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vue: {
            name: 'vue',
            test: /[\\/]node_modules[\\/]vue[\\/]/,
            priority: -10
          },
          vuex: {
            name: 'vuex',
            test: /[\\/]node_modules[\\/]vuex[\\/]/,
            priority: -10
          },
          'vue-router': {
            name: 'vue-router',
            test: /[\\/]node_modules[\\/]vue-router[\\/]/,
            priority: -10
          },
          'vant': {
            name: 'vant',
            test: /[\\/]node_modules[\\/]vant[\\/]/,
            priority: -10
          },
          'vendors': {
            name: 'vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: -20
          }
        }
      }
    }
  }
}
