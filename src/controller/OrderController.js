const BaseController = require('./BaseController');
const manager = require('../manager/OrderManager');

class OrderController extends BaseController {
    constructor() {
        super(manager);
    }
}

module.exports = new OrderController();
