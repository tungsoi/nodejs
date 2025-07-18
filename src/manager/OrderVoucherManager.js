const BaseManager = require('./BaseManager');
const service = require('../service/OrderVoucherService');

class OrderVoucherManager extends BaseManager {
  constructor() {
    super(service);
  }
}

module.exports = new OrderVoucherManager();