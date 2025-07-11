const BaseService = require('./BaseService');
const repository = require('../repository/PositionRepository');
const convertUtils = require('../utils/ConvertUtils');

class PositionService extends BaseService {
    constructor() {
        super(repository, convertUtils);
    }
}

module.exports = new PositionService();