const BaseManager = require('./BaseManager');
const service = require('../service/OrderService');

class OrderManager extends BaseManager {
    constructor() {
        super(service);
    }
}

module.exports = new OrderManager();