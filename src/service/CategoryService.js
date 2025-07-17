const BaseService = require('./BaseService');
const repository = require('../repository/CategoryRepository');
const validator = require('../validator/CategoryValidator');

class CategoryService extends BaseService {
    constructor() {
        super(repository, validator);
    }
}

module.exports = new CategoryService();