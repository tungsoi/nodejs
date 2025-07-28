const BaseResponse = require('../response/BaseResponse');
const {RESPONSE_MESSAGE, RESPONSE_STATUS} = require('../common/Constants');

class BaseController {
    constructor(manager) {
        this.manager = manager;
    }

    create = async (req, res) => {
        try {
            const body = req.body;
            if (req.guestToken) {
                body.guestToken = req.guestToken;
            }
            const newRecord = await this.manager.create(body);
            BaseResponse.success(res, newRecord, RESPONSE_MESSAGE.SUCCESS, RESPONSE_STATUS.SUCCESS);
        } catch (error) {
            BaseResponse.error(res, RESPONSE_MESSAGE.BAD_REQUEST, RESPONSE_STATUS.BAD_REQUEST, error.message);
        }
    };

    getById = async (req, res) => {
        try {
            const {id} = req.params;
            const record = await this.manager.getById(id);
            if (!record) {
                return BaseResponse.error(res, RESPONSE_MESSAGE.RECORD_NOT_FOUND, RESPONSE_STATUS.NOT_FOUND);
            }
            BaseResponse.success(res, record, RESPONSE_MESSAGE.SUCCESS, RESPONSE_STATUS.SUCCESS);
        } catch (error) {
            BaseResponse.error(res, RESPONSE_MESSAGE.BAD_REQUEST, RESPONSE_STATUS.BAD_REQUEST, error.message);
        }
    };

    update = async (req, res) => {
        try {
            const {id} = req.params;
            const body = req.body;
            if (req.guestToken) {
                body.guestToken = req.guestToken;
            }
            const updated = await this.manager.update(id, body);
            if (!updated) {
                return BaseResponse.error(res, RESPONSE_MESSAGE.RECORD_NOT_FOUND, RESPONSE_STATUS.NOT_FOUND);
            }
            BaseResponse.success(res, updated, RESPONSE_MESSAGE.SUCCESS, RESPONSE_STATUS.SUCCESS);
        } catch (error) {
            BaseResponse.error(res, RESPONSE_MESSAGE.BAD_REQUEST, RESPONSE_STATUS.BAD_REQUEST, error.message);
        }
    };

    delete = async (req, res) => {
        try {
            const {id} = req.params;
            const deleted = await this.manager.delete(id);
            if (!deleted) {
                return BaseResponse.error(res, RESPONSE_MESSAGE.RECORD_NOT_FOUND, RESPONSE_STATUS.NOT_FOUND);
            }
            BaseResponse.success(res, deleted, RESPONSE_MESSAGE.SUCCESS, RESPONSE_STATUS.SUCCESS);
        } catch (error) {
            BaseResponse.error(res, RESPONSE_MESSAGE.BAD_REQUEST, RESPONSE_STATUS.BAD_REQUEST, error.message);
        }
    };

    getAll = async (req, res) => {
        try {
            const {limit, order, ...filters} = req.query;
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
}

module.exports = BaseController;