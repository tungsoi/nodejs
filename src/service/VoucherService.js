const BaseService = require('./BaseService');
const repository = require('../repository/VoucherRepository');
const validator = require('../validator/VoucherValidator');

class VoucherService extends BaseService {
    constructor() {
        super(repository, validator);
    }
}

module.exports = new VoucherService();