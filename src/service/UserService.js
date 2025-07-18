const BaseService = require('./BaseService');
const repository = require('../repository/UserRepository');
const validator = require('../validator/UserValidator');
const userDto = require('../dto/UserDto');

class UserService extends BaseService {
    constructor() {
        super(repository, validator, userDto);
    }
}

module.exports = new UserService();