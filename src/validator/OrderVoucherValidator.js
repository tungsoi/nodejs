const BaseValidator = require("./BaseValidator");

class OrderVoucherValidator extends BaseValidator {
    validateCreate(data) {
        super.validateCreate(data);
        // throw new Error('Category must be defined');
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

module.exports = new OrderVoucherValidator();