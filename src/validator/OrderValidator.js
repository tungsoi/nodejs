const BaseValidator = require("./BaseValidator");
const globalUtils = require("../utils/global");

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
        if (globalUtils.object.isEmpty(data.guestToken)) throw new Error("Required guestToken is empty");
        if (globalUtils.object.isEmpty(data.customer)) throw new Error("CustomerData not found");
    }
}

module.exports = new OrderValidator();