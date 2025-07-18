const BaseService = require('./BaseService');
const repository = require('../repository/CustomerRepository');
const validator = require('../validator/CustomerValidator');

class CustomerService extends BaseService {
    constructor() {
        super(repository, validator);
    }
}

module.exports = new CustomerService();