const BaseService = require('./BaseService');
const repository = require('../repository/OrderShippingRepository');
const validator = require('../validator/OrderShippingValidator');
const orderShippingDto = require('../dto/OrderShippingDto');

class OrderShippingService extends BaseService {
    constructor() {
        super(repository, validator, orderShippingDto);
    }

    async getByOrderId(id) {
        const data = await this.repository.getByOrderId(id);
        return this.convertToDto(this.baseDto, data);
    }
}

module.exports = new OrderShippingService();