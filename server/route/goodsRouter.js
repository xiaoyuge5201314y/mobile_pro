const Router = require('koa-router');
const router = new Router();

const goods = require('../controller/GoodsController');
router.get('/getGoodsDetails',goods.getGoodsDetails);

module.exports = router;
