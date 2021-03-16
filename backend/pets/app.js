const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
// const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
// jwt鉴权
const koaJWT = require("koa-jwt")
const verToken = require("./token/verify")

// 实现文件上传
const koaBody = require("koa-body")

// 
const session = require("koa-session")
app.keys = ["token"]
app.use(session(app))

const user = require('./routes/user')
const banner = require('./routes/banner')
const home = require('./routes/home')
const detail = require('./routes/detail')
const comment = require('./routes/comment')
const category = require('./routes/category')
const catgoryDetail = require('./routes/catgoryDetail')
const video = require('./routes/video')
const column = require('./routes/column')

// error handler
onerror(app)

app.use(koaBody({
  multipart: true,
  formidable: {
    maxFieldsSize: 10 * 1024 * 1024,
    multipart: true
  }
}))

app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))


app.use(async(ctx, next)=> {
  let token = ctx.headers.authorization;
  // console.log("token----ctx", token)
  if(token == undefined){
      await next();
  }else{
      verToken.verToken(token).then((data)=> {
      //这一步是为了把解析出来的用户信息存入全局state中，这样在其他任一中间价都可以获取到state中的值
      // data: {
      // username: 'zero01',
      // password: '7c4a8d09ca3762af61e59520943dc26494f8941b',
      // iat: 1606113226, 开始时间
      // exp: 1606116826 失效时间
      // }
          ctx.state = {
              data:data
          };
          // let currentTime = Math.ceil((new Date()).getTime() / 1000)
          // console.log("777770000", currentTime)
          // console.log("data===", data)
      })
      await next();
  }
})

app.use(async(ctx, next)=>{
  return next().catch((err) => {
      if (401 == err.status) {
        ctx.status = 401;
          ctx.body = {
              status:401,
              msg:'登录过期，请重新登录'
          }
      } else {
          throw err;
      }
  });
});



// secret是秘钥 unless 那些API不需要token验证
// app.use(koaJWT({
//   secret: 'token'
// }).unless({
//   path: [/^\/api\/login|signin|getCode|loginCode|/]
// }));
// 上线
app.use(koaJWT({
  secret: 'token'
}).unless({
  path: [/^\/api\/login|signin|getCode|loginCode|getBanner|getColumnList|getHomeList|getDetail|getComment|getCategoryList|getCategoryDetail|getVideoList/]
}));


// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(user.routes(), user.allowedMethods())
app.use(banner.routes(), banner.allowedMethods())
app.use(home.routes(), home.allowedMethods())
app.use(detail.routes(), detail.allowedMethods())
app.use(comment.routes(), comment.allowedMethods())
app.use(category.routes(), category.allowedMethods())
// app.use(catgoryDetail.routes(), catgoryDetail.allowedMethods())
app.use(video.routes(), video.allowedMethods())
app.use(column.routes(), column.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
