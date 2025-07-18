const BaseService = require('./BaseService');
const repository = require('../repository/UserRepository');
const validator = require('../validator/UserValidator');

class UserService extends BaseService {
    constructor() {
        super(repository, validator);
    }
}

module.exports = new UserService();