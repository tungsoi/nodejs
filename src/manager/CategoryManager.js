const BaseManager = require('./BaseManager');
const service = require('../service/CategoryService');

class CategoryManager extends BaseManager {
  constructor() {
    super(service);
  }
}

module.exports = new CategoryManager();