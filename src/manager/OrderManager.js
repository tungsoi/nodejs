const BaseManager = require('./BaseManager');
const service = require('../service/OrderService');

class OrderManager extends BaseManager {
    constructor() {
        super(service);
    }

    async getOrderByCustomerId(id) {
        return await this.service.getOrderByCustomerId(id);
    }

    async initOrder(data) {
        return await this.service.initOrder(data);
    }
}

module.exports = new OrderManager();