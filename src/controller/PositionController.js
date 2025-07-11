const BaseController = require('./BaseController');
const manager = require('../manager/PositionManager');

class PositionController extends BaseController {
    constructor() {
        super(manager);
    }
}

module.exports = new PositionController();
