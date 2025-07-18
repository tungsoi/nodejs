const BaseController = require('./BaseController');
const manager = require('../manager/OrderVoucherManager');

class OrderVoucherController extends BaseController {
    constructor() {
        super(manager);
    }
}

module.exports = new OrderVoucherController();
