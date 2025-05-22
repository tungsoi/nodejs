const {OcrSdkHistory} = require('../client/database/PostgreSql');
const BaseRepository = require('./BaseRepository');
const EcmClient = require('../client/thirdparty/EcmClient');


class OcrSdkHistoryRepository extends BaseRepository {
    constructor() {
        super(OcrSdkHistory);
    }
}

module.exports = new OcrSdkHistoryRepository();