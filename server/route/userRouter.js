const Router = require('koa-router');
const router = new Router();

const user = require('../controller/UserController');
router.get('/getCart', user.getCart);
router.post('/addCart', user.addCart);

module.exports = router;
