const {RESPONSE_MESSAGE, RESPONSE_STATUS} = require('../common/Constants');

class BaseResponse {
    static success(res, data, message = RESPONSE_MESSAGE.SUCCESS, status = RESPONSE_STATUS.SUCCESS) {
        return res.status(status).json({status: status, message, data});
    }

    static error(res, message = RESPONSE_MESSAGE.INTERNAL_ERROR, status = RESPONSE_STATUS.INTERNAL_SERVER_ERROR, error = null) {
        return res.status(status).json({status: status, message, error});
    }
}

module.exports = BaseResponse;