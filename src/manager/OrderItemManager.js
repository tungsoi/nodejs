const BaseManager = require('./BaseManager');
const service = require('../service/OrderItemService');

class OrderItemManager extends BaseManager {
    constructor() {
        super(service);
    }

    async getByOrderId(id) {
        return await this.service.getByOrderId(id);
    }
}

module.exports = new OrderItemManager();