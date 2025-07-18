const BaseManager = require('./BaseManager');
const service = require('../service/CartService');

class CartManager extends BaseManager {
  constructor() {
    super(service);
  }
}

module.exports = new CartManager();