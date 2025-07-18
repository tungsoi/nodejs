const BaseController = require('./BaseController');
const manager = require('../manager/CustomerManager');

class CustomerController extends BaseController {
    constructor() {
        super(manager);
    }
}

module.exports = new CustomerController();
