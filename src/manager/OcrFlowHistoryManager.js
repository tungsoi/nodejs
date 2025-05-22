const BaseManager = require('./BaseManager');
const service = require('../service/OcrFlowHistoryService');

class OcrFlowHistoryManager extends BaseManager {
  constructor() {
    super(service);
  }
}

module.exports = new OcrFlowHistoryManager();