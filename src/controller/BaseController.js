const BaseResponse = require('../response/BaseResponse');
const {RESPONSE_MESSAGES} = require('../common/Constants');

class BaseController {
    constructor(manager) {
        this.manager = manager;
    }

    create = async (req, res) => {
        try {
            const newRecord = await this.manager.create(req.body);
            BaseResponse.success(res, newRecord, RESPONSE_MESSAGES.RECORD_CREATED, 201);
        } catch (error) {
            console.error('Error creating record:', error);
            BaseResponse.error(res, RESPONSE_MESSAGES.INTERNAL_ERROR);
        }
    };

    getById = async (req, res) => {
        try {
            const {id} = req.params;
            const record = await this.manager.getById(id);
            if (!record) {
                return BaseResponse.error(res, RESPONSE_MESSAGES.RECORD_NOT_FOUND, 404);
            }
            BaseResponse.success(res, record, RESPONSE_MESSAGES.SUCCESS);
        } catch (error) {
            console.error('Error fetching record:', error);
            BaseResponse.error(res, RESPONSE_MESSAGES.INTERNAL_ERROR);
        }
    };

    update = async (req, res) => {
        try {
            const {id} = req.params;
            const [updated] = await this.manager.update(id, req.body);
            if (!updated) {
                return BaseResponse.error(res, RESPONSE_MESSAGES.RECORD_NOT_FOUND, 404);
            }
            BaseResponse.success(res, null, RESPONSE_MESSAGES.RECORD_UPDATED);
        } catch (error) {
            console.error('Error updating record:', error);
            BaseResponse.error(res, RESPONSE_MESSAGES.INTERNAL_ERROR);
        }
    };

    delete = async (req, res) => {
        try {
            const {id} = req.params;
            const deleted = await this.manager.delete(id);
            if (!deleted) {
                return BaseResponse.error(res, RESPONSE_MESSAGES.RECORD_NOT_FOUND, 404);
            }
            BaseResponse.success(res, null, RESPONSE_MESSAGES.RECORD_DELETED);
        } catch (error) {
            console.error('Error deleting record:', error);
            BaseResponse.error(res, RESPONSE_MESSAGES.INTERNAL_ERROR);
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
            BaseResponse.success(res, results, RESPONSE_MESSAGES.SUCCESS);
        } catch (error) {
            console.error('Error fetching records:', error);
            BaseResponse.error(res, RESPONSE_MESSAGES.INTERNAL_ERROR);
        }
    };
}

module.exports = BaseController;