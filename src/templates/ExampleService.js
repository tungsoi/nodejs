const BaseService = require('./BaseService');
const repository = require('../repository/ExampleRepository');
const validator = require('../validator/ExampleValidator');

class ExampleService extends BaseService {
    constructor() {
        super(repository, validator);
    }
}

module.exports = new ExampleService();