const BaseController = require('./BaseController');
const manager = require('../manager/OrderShippingManager');

class OrderShippingController extends BaseController {
    constructor() {
        super(manager);
    }
}

module.exports = new OrderShippingController();
