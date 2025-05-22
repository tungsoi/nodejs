const BaseManager = require('./BaseManager');
const service = require('../service/OcrSdkHistoryService');
const ecmService = require('../service/EcmService');

class OcrSdkHistoryManager extends BaseManager {
    constructor() {
        super(service);
    }

    async getContentStream(documentId) {
        return this.service.getContentStream(documentId);
    }
}

module.exports = new OcrSdkHistoryManager();