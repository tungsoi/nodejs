const BaseManager = require('./baseManager');
const service = require('../service/ocrFlowHistoryService');

class OcrFlowHistoryManager extends BaseManager {
  constructor() {
    super(service);
  }
}

module.exports = new OcrFlowHistoryManager();