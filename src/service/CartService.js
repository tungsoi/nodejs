const BaseService = require('./BaseService');
const repository = require('../repository/CartRepository');
const validator = require('../validator/CartValidator');

class CartService extends BaseService {
    constructor() {
        super(repository, validator);
    }
}

module.exports = new CartService();