const BaseManager = require('./BaseManager');
const service = require('../service/OrderItemService');

class OrderItemManager extends BaseManager {
  constructor() {
    super(service);
  }
}

module.exports = new OrderItemManager();