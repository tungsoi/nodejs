const BaseValidator = require('./BaseValidator');
const {VOUCHER_TYPE} = require('../common/Constants');

class VoucherValidator extends BaseValidator {
    validateCreate(data) {
        super.validateCreate(data);
        if (!data.type || !Object.keys(VOUCHER_TYPE).includes(data.type.toUpperCase())) {
            throw new Error(`Invalid voucher type. Must be one of: ${Object.keys(VOUCHER_TYPE).join(' / ')}`);
        }
    }

    validateGetById(id) {
        super.validateGetById(id);
    }

    validateUpdate(id, data) {
        super.validateUpdate(id, data);
    }

    validateDelete(id) {
        super.validateDelete(id);
    }
}

module.exports = new VoucherValidator();