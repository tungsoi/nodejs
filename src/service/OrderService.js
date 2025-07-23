const BaseService = require('./BaseService');
const repository = require('../repository/OrderRepository');
const validator = require('../validator/OrderValidator');
const orderDto = require("../dto/OrderDto");
const {mapToDto} = require('../utils/MappingUtils');
const {calculationTotalPrice, mappingElementData} = require("../utils/OrderUtils");
const cartService = require('../service/CartService');
const customerService = require('../service/CustomerService');
const orderItemService = require('../service/OrderItemService');
const {isEmpty} = require("../utils/ObjectUtils");
const {ORDER_STATUS} = require("../common/Constants");
const cartItemService = require("../service/CartItemService");

class OrderService extends BaseService {
    constructor() {
        super(repository, validator, orderDto);
    }

    async getById(id) {
        this.validator.validateGetById(id);
        let order = await this.repository.getById(id);
        if (isEmpty(order)) return null;
        order = await mappingElementData(order);
        return mapToDto(orderDto, order);
    }

    async update(id, data) {
        this.validator.validateUpdate(id, data);
        const order = await this.getById(id);
        order.totalPrice = calculationTotalPrice(order);
        return this.repository.update(id, order);
    }

    async getOrderByCustomerId(id) {
        this.validator.validateGetOrderByCustomerId(id);
        const orders = await this.repository.getOrderByCustomerId(id);
        return mapToDto(orderDto, orders);
    }

    async initOrder(data) {
        this.validator.validateInitOrder(data);

        const {guestToken, customer: customerData} = data;
        if (!guestToken) throw new Error("Missing guestToken");
        if (isEmpty(customerData)) throw new Error("CustomerData not found");

        const cart = await cartService.getCartByGuestToken(guestToken);
        if (!cart || !cart.items?.length) throw new Error("Cart or items not found");

        const customer = await customerService.create(customerData);
        if (!customer) throw new Error("Customer create failed");

        const order = await this.create({
            customerId: customer.id,
            totalPrice: cart.totalPrice,
            status: ORDER_STATUS.NEW
        });
        await cartService.delete(cart.id);
        await Promise.all([
            ...cart.items.map(item =>
                orderItemService.create({
                    orderId: order.id,
                    productId: item.productId,
                    quantity: item.quantity,
                    price: item.productPrice
                })
            ),
            ...cart.items.map(item => cartItemService.delete(item.id))
        ]);

        return mapToDto(orderDto, order);
    }
}

module.exports = new OrderService();