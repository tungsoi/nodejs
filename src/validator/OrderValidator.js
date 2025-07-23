const BaseValidator = require("./BaseValidator");
const {isEmpty} = require("../utils/StringUtils");

class OrderValidator extends BaseValidator {
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

    validateInitOrder(data) {
        if (isEmpty(data.guestToken)) {
            throw new Error("Required guestToken is empty");
        }
    }
}

module.exports = new OrderValidator();