const BaseService = require('./BaseService');
const repository = require('../repository/OrderShippingRepository');
const validator = require('../validator/OrderShippingValidator');

class OrderShippingService extends BaseService {
    constructor() {
        super(repository, validator);
    }
}

module.exports = new OrderShippingService();