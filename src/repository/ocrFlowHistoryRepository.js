const {OcrFlowHistory} = require('../client/postgreSql');
const BaseRepository = require('./baseRepository');

class OcrFlowHistoryRepository extends BaseRepository {
    constructor() {
        super(OcrFlowHistory);
    }
}

module.exports = new OcrFlowHistoryRepository();