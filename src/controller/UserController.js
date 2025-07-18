const BaseController = require('./BaseController');
const manager = require('../manager/UserManager');

class UserController extends BaseController {
    constructor() {
        super(manager);
    }
}

module.exports = new UserController();
