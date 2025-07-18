const BaseService = require('./BaseService');
const repository = require('../repository/CustomerRepository');
const validator = require('../validator/CustomerValidator');
const customerDto = require('../dto/CustomerDto');

class CustomerService extends BaseService {
    constructor() {
        super(repository, validator, customerDto);
    }
}

module.exports = new CustomerService();