class HomeController {
  constructor() {};

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

}

module.exports = HomeController;
