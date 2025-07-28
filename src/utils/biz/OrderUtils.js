const {equal} = require('../global/StringUtils');
const {VOUCHER_TYPE, ORDER_STATUS} = require('../../common/Constants');
const customerService = require("../../service/CustomerService");
const orderVoucherService = require("../../service/OrderVoucherService");
const orderShippingService = require("../../service/OrderShippingService");
const orderItemService = require("../../service/OrderItemService");
const productService = require("../../service/ProductService");
const cartService = require("../../service/CartService");
const cartItemService = require("../../service/CartItemService");

const attachProductToOrderItems = async (items) => {
    await Promise.all(
        items.map(async (item) => {
            item.product = await productService.getById(item.productId);
        })
    );
    return items;
}

const enrichOrderData = async (order) => {
    order.customer = await customerService.getById(order.customerId);
    order.vouchers = await orderVoucherService.getByOrderId(order.id);
    order.ships = await orderShippingService.getByOrderId(order.id);
    order.items = await orderItemService.getByOrderId(order.id);
    order.totalPrice = calculationTotalPrice(order);
    return order;
}

const routeCartToOrder = async (data) => {
    const cart = await cartService.getCartByGuestToken(data.guestToken);
    if (!cart || !cart.items?.length) throw new Error("Cart or items not found");

    let customer = await customerService.getByPhone(data.customer.phone);
    if (!customer) await customerService.create(data.customer);

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

    return order.id;
}


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

const generateVoucher = (length = 6) => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

module.exports = {
    attachProductToOrderItems,
    enrichOrderData,
    routeCartToOrder,
    calculationTotalPrice,
    generateVoucher
}