const {RESPONSE_MESSAGES, RESPONSE_STATUS} = require('../common/Constants');

class BaseResponse {
    static success(res, data, message = RESPONSE_MESSAGES.SUCCESS, status = RESPONSE_STATUS.SUCCESS) {
        return res.status(status).json({success: true, message, data});
    }

    static error(res, message = RESPONSE_MESSAGES.INTERNAL_ERROR, status = RESPONSE_STATUS.INTERNAL_SERVER_ERROR, error = null) {
        return res.status(status).json({success: false, message, error});
    }
}

module.exports = BaseResponse;