const BaseService = require('./BaseService');
const repository = require('../repository/OrderItemRepository');
const validator = require('../validator/OrderItemValidator');

class OrderItemService extends BaseService {
    constructor() {
        super(repository, validator);
    }
}

module.exports = new OrderItemService();