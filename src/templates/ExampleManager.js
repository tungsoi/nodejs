const BaseManager = require('./BaseManager');
const service = require('../service/ExampleService');

class ExampleManager extends BaseManager {
  constructor() {
    super(service);
  }
}

module.exports = new ExampleManager();