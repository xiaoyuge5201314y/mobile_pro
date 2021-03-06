// 导入router合并中间件
const routerCombine = require('koa-combine-routers')
// 导入所有的路由
const homeRouter = require('./homeRouter');
const loginRouter = require('./loginRouter');

// 测试路由
homeRouter.get('/test', ctx => {
  ctx.body = 'fn("aa")'
});

const router = routerCombine(homeRouter,loginRouter)

module.exports = router;
