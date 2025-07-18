const BaseService = require('./BaseService');
const repository = require('../repository/CartItemRepository');
const validator = require('../validator/CartItemValidator');

class CartItemService extends BaseService {
    constructor() {
        super(repository, validator);
    }
}

module.exports = new CartItemService();