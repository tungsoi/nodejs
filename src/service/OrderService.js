const BaseService = require('./BaseService');
const repository = require('../repository/OrderRepository');
const validator = require('../validator/OrderValidator');
const orderDto = require("../dto/OrderDto");
const {mapToDto} = require('../utils/MappingUtils');
const customerService = require('../service/CustomerService');
const orderVoucherService = require('../service/OrderVoucherService');
const orderShippingService = require('../service/OrderShippingService');
const orderItemService = require('../service/OrderItemService');

class OrderService extends BaseService {
    constructor() {
        super(repository, validator, orderDto);
    }

    async getById(id) {
        this.validator.validateGetById(id);
        const order = await this.repository.getById(id);
        order.customer = await customerService.getById(order.customer_id);
        order.vouchers = await orderVoucherService.getByOrderId(id);
        order.shipping = await orderShippingService.getByOrderId(id);
        order.items = await orderItemService.getByOrderId(id);
        return mapToDto(orderDto, order);
    }
}

module.exports = new OrderService();