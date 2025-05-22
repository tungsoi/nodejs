const {OcrFlowHistory} = require('../client/database/PostgreSql');
const BaseRepository = require('./BaseRepository');

class OcrFlowHistoryRepository extends BaseRepository {
    constructor() {
        super(OcrFlowHistory);
    }
}

module.exports = new OcrFlowHistoryRepository();