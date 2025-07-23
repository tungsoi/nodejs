const BaseService = require('./BaseService');
const repository = require('../repository/CustomerRepository');
const validator = require('../validator/CustomerValidator');
const customerDto = require('../dto/CustomerDto');
const {mapToDto} = require("../utils/MappingUtils");

class CustomerService extends BaseService {
    constructor() {
        super(repository, validator, customerDto);
    }

    async create(data) {
        this.validator.validateCreate(data);
        const isExist = await this.getByPhone(data.phone);
        return isExist ? isExist : this.repository.create(data);
    }

    async getByPhone(phone) {
        return await this.repository.getByPhone(phone);
    }
}

module.exports = new CustomerService();