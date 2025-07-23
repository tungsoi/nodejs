const {equal} = require('./StringUtils');
const {VOUCHER_TYPE} = require('../common/Constants');
const customerService = require("../service/CustomerService");
const orderVoucherService = require("../service/OrderVoucherService");
const orderShippingService = require("../service/OrderShippingService");
const orderItemService = require("../service/OrderItemService");

const calculationTotalPrice = (order) => {
    let totalPrice = 0;
    if (order.items && order.items.length > 0) {
        order.items.forEach(item => {
            const itemPrice = item.price * item.quantity;
            totalPrice += itemPrice;
        });
    }

    if (order.ships && order.ships.length > 0) {
        order.ships.forEach(shipping => {
            const cost = shipping.cost;
            totalPrice += cost;
        });
    }

    if (order.vouchers && order.vouchers.length > 0) {
        order.vouchers.forEach(voucher => {
            if (equal(voucher.type, VOUCHER_TYPE.DISCOUNT)) {
                totalPrice -= voucher.appliedAmount;
            }
        });
    }
    return totalPrice;
}

const mappingElementData = async (order) => {
    order.customer = await customerService.getById(order.customerId);
    order.vouchers = await orderVoucherService.getByOrderId(order.id);
    order.ships = await orderShippingService.getByOrderId(order.id);
    order.items = await orderItemService.getByOrderId(order.id);
    order.totalPrice = calculationTotalPrice(order);
    return order;
}

module.exports = {
    calculationTotalPrice,
    mappingElementData
}