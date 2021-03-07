const fs = require('fs')
const util = require('../util/index.js')
const path = require('path')
const {
  EEXIST
} = require('constants')

module.exports = class {
  constructor() {}

  // 获取购物车数据
  static async getCart(ctx) {
    const url = path.resolve(__dirname, '../db/user.json')
    const res = await util.readFile(url);
    // 获取cartList
    let cartInfo = {};
    if (res) {
      const userList = JSON.parse(res);
      const userInfo = userList.find(ele => ele.id === 2);
      if (userInfo.cart) {
        cartInfo = userInfo.cart;
      }
    }
    ctx.body = {
      code: 200,
      data: cartInfo,
    }
  }

  // 加入购物车
  static addCart(ctx) {
    // 获取用户信息
    const {
      productId,
      count,
      price,
      uid
    } = ctx.request.body

    //所有用户数据 
    let res = util.readFile(path.resolve(__dirname, '../db/user.json'));
    res = JSON.parse(res);
    //找到当前用户 和 索引
    const user = res.find(ele => ele.id === uid);
    const userIndex = res.findIndex(ele => ele.id === uid);
    // 商品列表
    let cartList = user.cartList;
    if (!cartList) {
      cartList = []
    }
    // 获取对应商品和索引
    const goods = cartList.find(ele => ele.productId == productId);
    const goodsIndex = cartList.findIndex(ele => ele.productId == productId);
    // 商品不存在就添加到购物车中
    if (goodsIndex == -1) {
      cartList.push({
        count,
        productId,
        price
      })
    } else {
      // 如果已在购物车 就修改对应的商品数量
      cartList[goodsIndex] = {
        price,
        count: goods.count + count,
        productId
      };
    }
    // 将修改后的商品数据重新写入 user文件中
    res[userIndex].cartList = cartList;
    util.writeFile(path.resolve(__dirname, '../db/user.json'), JSON.stringify(res));
  }

}
