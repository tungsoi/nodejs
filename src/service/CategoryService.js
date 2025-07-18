const BaseService = require('./BaseService');
const repository = require('../repository/CategoryRepository');
const validator = require('../validator/CategoryValidator');
const categoryDto = require('../dto/CategoryDto');

class CategoryService extends BaseService {
    constructor() {
        super(repository, validator, categoryDto);
    }
}

module.exports = new CategoryService();