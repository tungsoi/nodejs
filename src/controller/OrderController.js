const BaseController = require('./BaseController');
const manager = require('../manager/OrderManager');
const BaseResponse = require("../response/BaseResponse");
const {RESPONSE_MESSAGE, RESPONSE_STATUS} = require("../common/Constants");

class OrderController extends BaseController {
    constructor() {
        super(manager);
    }

    getOrderByCustomerId = async (req, res) => {
        try {
            const {id} = req.params;
            const record = await this.manager.getOrderByCustomerId(id);
            if (!record) {
                return BaseResponse.error(res, RESPONSE_MESSAGE.RECORD_NOT_FOUND, RESPONSE_STATUS.NOT_FOUND);
            }
            BaseResponse.success(res, record, RESPONSE_MESSAGE.SUCCESS, RESPONSE_STATUS.SUCCESS);
        } catch (error) {
            BaseResponse.error(res, RESPONSE_MESSAGE.BAD_REQUEST, RESPONSE_STATUS.BAD_REQUEST, error.message);
        }
    };
}

module.exports = new OrderController();
