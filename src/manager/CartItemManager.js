const BaseManager = require('./BaseManager');
const service = require('../service/CartItemService');

class CartItemManager extends BaseManager {
  constructor() {
    super(service);
  }
}

module.exports = new CartItemManager();