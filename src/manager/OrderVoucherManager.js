const BaseManager = require('./BaseManager');
const service = require('../service/OrderVoucherService');

class OrderVoucherManager extends BaseManager {
    constructor() {
        super(service);
    }

    async getByOrderId(id) {
        return await this.service.getByOrderId(id);
    }
}

module.exports = new OrderVoucherManager();