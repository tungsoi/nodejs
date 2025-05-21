const BaseController = require('./baseController');
const manager = require('../manager/ocrFlowHistoryManager');

class OcrFlowHistoryController extends BaseController {
  constructor() {
    super(manager);
  }
}

module.exports = new OcrFlowHistoryController();