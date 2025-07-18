const BaseService = require('./BaseService');
const repository = require('../repository/CartItemRepository');
const validator = require('../validator/CartItemValidator');
const cartItemDto = require('../dto/CartItemDto');

class CartItemService extends BaseService {
    constructor() {
        super(repository, validator, cartItemDto);
    }
}

module.exports = new CartItemService();