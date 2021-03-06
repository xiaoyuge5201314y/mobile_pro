const fs = require('fs')
module.exports = class {
  constructor() {}
  // 登录
  static async login(ctx) {
    // 获取用户信息
    const {
      username,
      password
    } = ctx.request.body;
    const result = await new Promise((resolve, reject) => {
      fs.readFile('../db/user.json', 'utf8', (e, data) => {
        if (e) {
          reject(e)
        } else {
          const res = JSON.parse(data).find(ele => ele.password === password && ele.username === username);
          resolve(res)
        }
      })
    })
    if (result) {
      ctx.body = {
        code: 200,
        data: result,
        message: "success"
      }
    } else {
      ctx.body = {
        code: 400,
        message: "failed"
      }
    }
  }
}
