const BaseService = require('./BaseService');
const repository = require('../repository/OcrSdkHistoryRepository');
const convertUtils = require('../utils/ConvertUtils');
const ecmService = require('./ecmService');

class OcrSdkHistoryService extends BaseService {
    constructor() {
        super(repository, convertUtils);
    }

    async getContentStream(documentId) {
        return ecmService.getContentStream(documentId);
    }
}

module.exports = new OcrSdkHistoryService();