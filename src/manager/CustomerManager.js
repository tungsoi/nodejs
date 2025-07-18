const BaseManager = require('./BaseManager');
const service = require('../service/CustomerService');

class CustomerManager extends BaseManager {
    constructor() {
        super(service);
    }
}

module.exports = new CustomerManager();