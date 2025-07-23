const BaseController = require('./BaseController');
const manager = require('../manager/CartManager');
const BaseResponse = require("../response/BaseResponse");
const {RESPONSE_MESSAGE, RESPONSE_STATUS} = require("../common/Constants");

class CartController extends BaseController {
    constructor() {
        super(manager);
    }

    getAll = async (req, res) => {
        try {
            const guestToken = req.guestToken;
            const {limit, order, ...filters} = req.query;
            if (guestToken) {
                filters.guestToken = guestToken;
            }
            const options = {
                limit: limit ? parseInt(limit, 10) : undefined,
                order: order ? JSON.parse(order) : undefined,
                ...filters
            };
            const results = await this.manager.getAll(options);
            BaseResponse.success(res, results, RESPONSE_MESSAGE.SUCCESS, RESPONSE_STATUS.SUCCESS);
        } catch (error) {
            BaseResponse.error(res, RESPONSE_MESSAGE.BAD_REQUEST, RESPONSE_STATUS.BAD_REQUEST, error.message);
        }
    };

    getCartByUserId = async (req, res) => {
        try {
            const {userId} = req.params;
            const record = await this.manager.getCartByUserId(userId);
            if (!record) {
                return BaseResponse.error(res, RESPONSE_MESSAGE.RECORD_NOT_FOUND, RESPONSE_STATUS.NOT_FOUND);
            }
            BaseResponse.success(res, record, RESPONSE_MESSAGE.SUCCESS, RESPONSE_STATUS.SUCCESS);
        } catch (error) {
            BaseResponse.error(res, RESPONSE_MESSAGE.BAD_REQUEST, RESPONSE_STATUS.BAD_REQUEST, error.message);
        }
    };

    getCartByGuestToken = async (req, res) => {
        try {
            const {guestToken} = req.guestToken;
            if (!guestToken) {
                throw new Error('Invalid Guest Token');
            }
            const record = await this.manager.getCartByGuestToken(guestToken);
            if (!record) {
                return BaseResponse.error(res, RESPONSE_MESSAGE.RECORD_NOT_FOUND, RESPONSE_STATUS.NOT_FOUND);
            }
            BaseResponse.success(res, record, RESPONSE_MESSAGE.SUCCESS, RESPONSE_STATUS.SUCCESS);
        } catch (error) {
            BaseResponse.error(res, RESPONSE_MESSAGE.BAD_REQUEST, RESPONSE_STATUS.BAD_REQUEST, error.message);
        }
    };
}

module.exports = new CartController();
