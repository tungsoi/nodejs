const BaseController = require('./BaseController');
const manager = require('../manager/ProductManager');

class ProductController extends BaseController {
    constructor() {
        super(manager);
    }
}

module.exports = new ProductController();
