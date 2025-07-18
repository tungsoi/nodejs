const BaseService = require('./BaseService');
const repository = require('../repository/CartRepository');
const validator = require('../validator/CartValidator');
const cartDto = require('../dto/CartDto');

class CartService extends BaseService {
    constructor() {
        super(repository, validator, cartDto);
    }
}

module.exports = new CartService();