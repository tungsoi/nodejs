const BaseManager = require('./BaseManager');
const service = require('../service/OrderShippingService');

class OrderShippingManager extends BaseManager {
  constructor() {
    super(service);
  }
}

module.exports = new OrderShippingManager();