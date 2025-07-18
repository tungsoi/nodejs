const BaseManager = require('./BaseManager');
const service = require('../service/ProductService');

class ProductManager extends BaseManager {
  constructor() {
    super(service);
  }
}

module.exports = new ProductManager();