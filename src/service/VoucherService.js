const BaseService = require('./BaseService');
const repository = require('../repository/VoucherRepository');
const validator = require('../validator/VoucherValidator');
const voucherDto = require('../dto/VoucherDto');

class VoucherService extends BaseService {
    constructor() {
        super(repository, validator, voucherDto);
    }
}

module.exports = new VoucherService();