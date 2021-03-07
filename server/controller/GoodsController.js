const fs = require('fs')
const util = require('../util/index.js')
const path = require('path')

module.exports = class {
  constructor() {}
  //   获取商品详情
  static async getGoodsDetails(ctx) {
    const productId = ctx.request.query.productId;
    let goods = {}
    try {
      const res = await util.readFile(path.resolve(__dirname, '../db/goodsDetails.json'));
      if (res) {
        const goodsList = JSON.parse(res).result;
        if (goodsList) {
          goods = goodsList.find(ele => ele.productId == productId);
        }
      }
    } catch (err) {
      console.log(err)
    }
    ctx.body = {
      code: 200,
      data: goods
    };
  }

}
