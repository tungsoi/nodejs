const BaseController = require('./BaseController');
const manager = require('../manager/CartItemManager');

class CartItemController extends BaseController {
    constructor() {
        super(manager);
    }
}

module.exports = new CartItemController();
