const Router = require('koa-router');
const router = new Router();

const Login = require('../api/Login');

router.post('/login', Login.login);

module.exports = router;
