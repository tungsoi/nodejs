const BaseService = require('./BaseService');
const repository = require('../repository/ProductRepository');
const validator = require('../validator/ProductValidator');

class ProductService extends BaseService {
    constructor() {
        super(repository, validator);
    }
}

module.exports = new ProductService();