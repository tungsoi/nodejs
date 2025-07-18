const BaseController = require('./BaseController');
const manager = require('../manager/VoucherManager');

class VoucherController extends BaseController {
    constructor() {
        super(manager);
    }
}

module.exports = new VoucherController();
