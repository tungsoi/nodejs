const BaseService = require('./BaseService');
const repository = require('../repository/OrderVoucherRepository');
const validator = require('../validator/OrderVoucherValidator');

class OrderVoucherService extends BaseService {
    constructor() {
        super(repository, validator);
    }
}

module.exports = new OrderVoucherService();