const BaseService = require('./BaseService');
const repository = require('../repository/CustomerRepository');
const validator = require('../validator/CustomerValidator');
const customerDto = require('../dto/CustomerDto');

class CustomerService extends BaseService {
    constructor() {
        super(repository, validator, customerDto);
    }

    async create(data) {
        this.validator.validateCreate(data);
        return await this.repository.getByPhone(data.phone) ?? await this.repository.create(data);
    }

    async getByPhone(phone) {
        return await this.repository.getByPhone(phone);
    }
}

module.exports = new CustomerService();