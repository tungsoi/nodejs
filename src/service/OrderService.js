const BaseService = require('./BaseService');
const repository = require('../repository/OrderRepository');
const validator = require('../validator/OrderValidator');
const customerService = require('../service/CustomerService');
const orderVoucherService = require('../service/OrderVoucherService');
const orderShippingService = require('../service/OrderShippingService');
const orderItemService = require('../service/OrderItemService');
const orderDto = require("../dto/OrderDto");
const {mapToDto} = require('../utils/MappingUtils');
const {calculationTotalPrice} = require("../utils/OrderUtils");

class OrderService extends BaseService {
    constructor() {
        super(repository, validator, orderDto);
    }

    async getById(id) {
        this.validator.validateGetById(id);
        const order = await this.repository.getById(id);
        order.customer = await customerService.getById(order.customer_id);
        order.vouchers = await orderVoucherService.getByOrderId(id);
        order.ships = await orderShippingService.getByOrderId(id);
        order.items = await orderItemService.getByOrderId(id);
        return mapToDto(orderDto, order);
    }

    async create(data) {
        this.validator.validateCreate(data);
        await this.repository.create(data);
        const order = await this.getById(data.id);
        order.total_price = calculationTotalPrice(order);
        await this.update(data.id, order);
        return mapToDto(orderDto, order);
    }

    async update(id, data) {
        this.validator.validateUpdate(id, data);
        const order = await this.getById(id);
        order.total_price = calculationTotalPrice(order);
        return this.repository.update(id, order);
    }

    async getOrderByCustomerId(id) {
        this.validator.validateGetOrderByCustomerId(id);
        const orders = await this.repository.getOrderByCustomerId(id);
        return mapToDto(orderDto, orders);
    }
}

module.exports = new OrderService();