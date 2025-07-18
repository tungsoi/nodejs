const BaseController = require('./BaseController');
const manager = require('../manager/OrderItemManager');

class OrderItemController extends BaseController {
    constructor() {
        super(manager);
    }
}

module.exports = new OrderItemController();
