const {equal} = require('./StringUtils');
const {VOUCHER} = require('../common/Constants');

const calculationTotalPrice = (order) => {
    let totalPrice = 0;
    order.items.forEach(item => {
        const itemPrice = item.price * item.quantity;
        totalPrice += itemPrice;
    });

    order.shipping.forEach(shipping => {
        const shippingPrice = shipping.shipping_cost;
        totalPrice += shippingPrice;
    });

    order.vouchers.forEach(voucher => {
        if (equal(voucher.type, VOUCHER.DISCOUNT)) {
            totalPrice -= voucher.applied_amount;
        }
    });
    return totalPrice;
}

module.exports = {
    calculationTotalPrice,
}