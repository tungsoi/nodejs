const BaseController = require('./BaseController');
const manager = require('../manager/OcrSdkHistoryManager');
const BaseResponse = require("../response/BaseResponse");
const {RESPONSE_MESSAGES} = require("../common/Constants");

class OcrSdkHistoryController extends BaseController {
    constructor() {
        super(manager);
    }

    getContentStream = async (req, res) => {
        try {
            const documentId = req.params.documentId;
            const results = await this.manager.getContentStream(documentId);
            BaseResponse.success(res, results, RESPONSE_MESSAGES.SUCCESS);
        } catch (error) {
            console.error('Error fetching records:', error);
            BaseResponse.error(res, RESPONSE_MESSAGES.INTERNAL_ERROR);
        }
    };
}

module.exports = new OcrSdkHistoryController();
