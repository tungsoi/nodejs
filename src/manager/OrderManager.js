const BaseManager = require('./BaseManager');
const service = require('../service/OrderService');

class OrderManager extends BaseManager {
    constructor() {
        super(service);
    }

    async getOrderByCustomerId(id) {
        return await this.service.getOrderByCustomerId(id);
    }
}

module.exports = new OrderManager();