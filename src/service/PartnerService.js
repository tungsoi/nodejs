const BaseService = require('./BaseService');
const repository = require('../repository/PartnerRepository');
const convertUtils = require('../utils/ConvertUtils');

class PartnerService extends BaseService {
    constructor() {
        super(repository, convertUtils);
    }
}

module.exports = new PartnerService();