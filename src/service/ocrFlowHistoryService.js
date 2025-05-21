const BaseService = require('./baseService');
const repository = require('../repository/ocrFlowHistoryRepository');
const convertUtils = require('../utils/convertUtils');

class OcrFlowHistoryService extends BaseService {
    constructor() {
        super(repository, convertUtils);
    }
}

module.exports = new OcrFlowHistoryService();