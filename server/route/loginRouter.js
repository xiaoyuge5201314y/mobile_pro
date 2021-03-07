const Router = require('koa-router');
const router = new Router();

const Login = require('../controller/LoginController');

router.post('/login', Login.login);

module.exports = router;
