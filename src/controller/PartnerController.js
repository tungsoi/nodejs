const BaseController = require('./BaseController');
const manager = require('../manager/PartnerManager');

class PartnerController extends BaseController {
    constructor() {
        super(manager);
    }
}

module.exports = new PartnerController();
