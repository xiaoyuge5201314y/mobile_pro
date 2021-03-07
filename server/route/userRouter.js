const Router = require('koa-router');
const router = new Router();

const user = require('../controller/UserController');
router.get('/getCart', user.getCart);
router.post('/addCart', user.addCart);
router.post('/deleteCart', user.deleteCart);
module.exports = router;
