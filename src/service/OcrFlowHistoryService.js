const BaseService = require('./BaseService');
const repository = require('../repository/OcrFlowHistoryRepository');
const convertUtils = require('../utils/ConvertUtils');

class OcrFlowHistoryService extends BaseService {
    constructor() {
        super(repository, convertUtils);
    }
}

module.exports = new OcrFlowHistoryService();