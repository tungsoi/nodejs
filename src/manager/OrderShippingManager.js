const BaseManager = require('./BaseManager');
const service = require('../service/OrderShippingService');

class OrderShippingManager extends BaseManager {
    constructor() {
        super(service);
    }

    async getByOrderId(id) {
        return await this.service.getByOrderId(id);
    }
}

module.exports = new OrderShippingManager();