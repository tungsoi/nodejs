const BaseService = require('./BaseService');
const repository = require('../repository/OrderShippingRepository');
const validator = require('../validator/OrderShippingValidator');
const orderShippingDto = require('../dto/OrderShippingDto');
const {mapToDto} = require("../utils/MappingUtils");

class OrderShippingService extends BaseService {
    constructor() {
        super(repository, validator, orderShippingDto);
    }

    async getByOrderId(id) {
        const data = await this.repository.getByOrderId(id);
        return mapToDto(this.baseDto, data);
    }
}

module.exports = new OrderShippingService();