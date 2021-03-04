// 导入path模块
const path = require('path')
// 引入koa 及其中间件
const
  koa = require('koa'),
  koaBody = require('koa-body'), //解析body
  koaJson = require('koa-json'), //解析json
  koaCompose = require('koa-compose'), //合并中间件
  koaCompress = require('koa-compress'), //压缩中间件
  koaHelmet = require('koa-helmet'), //安全
  koaCors = require('koa2-cors'), //跨域
  koaStatic = require('koa-static'), //静态
  router = require('./route/index'); //路由

const app = new koa();

const middleWare = koaCompose([
  koaCors(),
  koaBody({
    strict: false, //设为false 默认为true 不解析get head delete请求
  }),
  koaJson({
    pretty: false,
    param: 'pretty'
  }),
  koaStatic(path.resolve(__dirname, '../public')),
  koaHelmet(),
]);

app.use(middleWare);
// router必须放在cors的后面
app.use(router());

app.listen(80, () => console.log("http://localhost"));
