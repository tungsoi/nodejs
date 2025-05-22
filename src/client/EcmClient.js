require('dotenv').config();
const AxiosClient = require('./AxiosClient');
const { URLS } = require('../common/Urls');
const EcmResponse = require('../response/EcmResponse');

class EcmClient {
    constructor(baseURL, contentType = 'application/json') {
        this.client = new AxiosClient(baseURL, {
            'Content-Type': contentType
        });
    }

    async getContentStream(documentId) {
        try {
            const url = process.env.SIT_LOS_ECM + URLS.ECM_GET_DOCUMENT + "?documentId=" + documentId;
            const response = await this.client.get(url);
            return new EcmResponse(response.data.result);
        } catch (error) {
            console.error('Error in getContentStream:', error);
            throw error;
        }
    }
}

module.exports = EcmClient;