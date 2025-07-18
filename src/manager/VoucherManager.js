const BaseManager = require('./BaseManager');
const service = require('../service/VoucherService');

class VoucherManager extends BaseManager {
    constructor() {
        super(service);
    }
}

module.exports = new VoucherManager();