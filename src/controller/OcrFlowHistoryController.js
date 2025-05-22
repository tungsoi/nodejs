const BaseController = require('./BaseController');
const manager = require('../manager/OcrFlowHistoryManager');

class OcrFlowHistoryController extends BaseController {
  constructor() {
    super(manager);
  }
}

module.exports = new OcrFlowHistoryController();
