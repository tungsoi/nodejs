const {OcrSdkHistory} = require('../client/PostgreSql');
const BaseRepository = require('./BaseRepository');
const EcmClient = require('../client/EcmClient');


class OcrSdkHistoryRepository extends BaseRepository {
    constructor() {
        super(OcrSdkHistory);
    }
}

module.exports = new OcrSdkHistoryRepository();