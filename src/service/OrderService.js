const BaseService = require('./BaseService');
const repository = require('../repository/OrderRepository');
const validator = require('../validator/OrderValidator');
const orderDto = require("../dto/OrderDto");
const {mappingElementData} = require("../utils/biz/OrderUtils");
const cartService = require('../service/CartService');
const customerService = require('../service/CustomerService');
const orderItemService = require('../service/OrderItemService');
const {isEmpty} = require("../utils/global/ObjectUtils");
const {ORDER_STATUS} = require("../common/Constants");
const cartItemService = require("../service/CartItemService");

const bizUtils = require("../utils/biz");
const globalUtils = require("../utils/global");

class OrderService extends BaseService {
    constructor() {
        super(repository, validator, orderDto);
    }

    async getById(id) {
        this.validator.validateGetById(id);
        let order = await this.repository.getById(id);
        if (globalUtils.object.isEmpty(order)) return null;
        return this.convertToDto(orderDto, await bizUtils.order.enrichOrderData(order));
    }

    async getOrderByCustomerId(id) {
        this.validator.validateGetOrderByCustomerId(id);
        return this.convertToDto(orderDto, await this.repository.getOrderByCustomerId(id));
    }

    async update(id, data) {
    //     this.validator.validateUpdate(id, data);
    //
    //     const order = await this.getById(id);
    //     return order;
        // if (isEmpty(order)) throw new Error('Not found order');
        //
        // const orderId = order.id;
        //
        // // items
        // const items = Array.isArray(data.items) ? data.items : [];
        // await Promise.all(items.map(async (item) => {
        //     const {productId, quantity} = item;
        //     if (!productId || quantity == null) return;
        //     const existingItem = await orderItemService.findOne(orderId, productId);
        //     if (quantity <= 0 && existingItem) {
        //         return orderItemService.delete(existingItem.id);
        //     } else if (existingItem) {
        //         return orderItemService.update(existingItem.id, {quantity});
        //     } else if (quantity > 0) {
        //         return orderItemService.create({orderId, productId, quantity});
        //     }
        // }));

        // vouchers
        // const vouchers = Array.isArray(data.vouchers) ? data.vouchers : [];
        // await Promise.all(vouchers.map(async (voucher) => {
        //     const existingVoucher = await orderVoucherService.findOne(order.id, voucher.voucherId);
        //     if (!existingVoucher) {
        //         return await orderVoucherService.create({
        //             orderId,
        //             voucherId: voucher.voucherId,
        //             appliedAmount: existingVoucher.value
        //         });
        //     }
        // }))
        // const orderUpdated = await this.getById(orderId);
        // const totalPrice = calculationTotalPrice(orderUpdated);
        // await this.repository.update(orderId, {totalPrice});
        // await this.clearCache(orderId);
        // orderUpdated.totalPrice = totalPrice;
        // return this.convertToDto(orderDto, orderUpdated);
    }

    async initOrder(data) {
        this.validator.validateInitOrder(data);
        const orderId = await bizUtils.order.routeCartToOrder(data);
        return this.convertToDto(orderDto, await this.getById(orderId));
    }
}

module.exports = new OrderService();