const BaseController = require('./BaseController');
const manager = require('../manager/ExampleManager');

class ExampleController extends BaseController {
    constructor() {
        super(manager);
    }
}

module.exports = new ExampleController();
