const BaseService = require('./BaseService');
const repository = require('../repository/OrderRepository');
const validator = require('../validator/OrderValidator');

class OrderService extends BaseService {
    constructor() {
        super(repository, validator);
    }
}

module.exports = new OrderService();