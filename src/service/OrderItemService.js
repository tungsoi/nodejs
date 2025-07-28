const BaseService = require('./BaseService');
const repository = require('../repository/OrderItemRepository');
const validator = require('../validator/OrderItemValidator');
const orderItemDto = require('../dto/OrderItemDto');

const bizUtils = require("../utils/biz");
const globalUtils = require("../utils/global");

class OrderItemService extends BaseService {
    constructor() {
        super(repository, validator, orderItemDto);
    }

    async getByOrderId(id) {
        const data = await this.repository.getByOrderId(id);
        if (globalUtils.object.isEmpty(data)) return null;
        await bizUtils.order.attachProductToOrderItems(data);
        return this.convertToDto(this.baseDto, data);
    }

    async findOne(orderId, productId) {
        const data = await this.repository.findOne(orderId, productId);
        return this.convertToDto(this.baseDto, data);
    }
}

module.exports = new OrderItemService();