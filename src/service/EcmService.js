const BaseService = require('./BaseService');
const EcmClient = require('../client/thirdparty/EcmClient');
require('dotenv').config();

const ecmClient = new EcmClient(process.env.SIT_LOS_ECM);

class EcmService extends BaseService {
    async getContentStream(documentId) {
        return await ecmClient.getContentStream(documentId);
    }
}

module.exports = new EcmService();