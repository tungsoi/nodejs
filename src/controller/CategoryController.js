const BaseController = require('./BaseController');
const manager = require('../manager/CategoryManager');

class CategoryController extends BaseController {
    constructor() {
        super(manager);
    }
}

module.exports = new CategoryController();
