const BaseManager = require('./BaseManager');
const service = require('../service/UserService');

class UserManager extends BaseManager {
  constructor() {
    super(service);
  }
}

module.exports = new UserManager();