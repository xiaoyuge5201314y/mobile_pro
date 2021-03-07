const fs = require('fs')
const util = require('../util/index.js')
const path = require('path')

module.exports = class {
  constructor() {}

  // 加入购物车
  static addCart(ctx) {
    // 获取用户信息
    const {
      productId,
      productNum,
      salePrice,
      uid
    } = ctx.request.body
    console.log(ctx.request.body)
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
        productNum,
        productId,
        salePrice
      })
    } else {
      // 如果已在购物车 就修改对应的商品数量
      cartList[goodsIndex] = {
        salePrice,
        productNum: goods.productNum + productNum,
        productId
      };
    }
    // 将修改后的商品数据重新写入 user文件中
    res[userIndex].cartList = cartList;
    util.writeFile(path.resolve(__dirname, '../db/user.json'), JSON.stringify(res));
    ctx.body = {
      code: 200,
      message: 'ok'
    }
  }

  // 获取购物车数据
  static getCart(ctx) {
    //  获取当前用户
    let res = util.readFile(path.resolve(__dirname, '../db/user.json'))
    res = JSON.parse(res);
    const uid = ctx.request.query.uid;
    const user = res.find(ele => ele.id == uid);

    // 获取购物车所有商品
    let allGoods = util.readFile(path.resolve(__dirname, '../db/allGoods.json'));
    allGoods = JSON.parse(allGoods).result.data;
    // 遍历当前用户所有商品
    user.cartList.map(ele => {
      //  遍历所有商品
      allGoods.forEach(item => {
        if (ele.productId == item.productId) {
          ele.salePrice = item.salePrice;
          ele.subTitle = item.subTitle;
          ele.productName = item.productName;
          ele.productImageBig = item.productImageBig;
          return;
        }
      });
    })

    ctx.body = {
      code: 200,
      data: user.cartList
    }
  }

  // 删除购物车商品
  static deleteCart(ctx) {
    let res = util.readFile(path.resolve(__dirname, '../db/user.json'))
    res = JSON.parse(res);
    //  获取当前用户
    const {
      uid,
      productId,
      count
    } = ctx.request.body;
    const user = res.find(ele => ele.id == uid);
    const userIndex = res.findIndex(ele => ele.id == uid);

    user.cartList.find((ele, i) => {
      if (ele.productId = productId) {
        ele.productNum -= count
        if (ele.productNum <= 0) {
          user.cartList.splice(i, 1);
        }
        return true;
      }

    });
    console.log(userIndex)
    res[userIndex].cartList = user.cartList;
    util.writeFile(path.resolve(__dirname, '../db/user.json'), JSON.stringify(res));
    ctx.body = {
      code: 200,
      message: 'ok'
    }
  }

}
