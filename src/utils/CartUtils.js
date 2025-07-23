const cartItemService = require("../service/CartItemService");

const calculationTotalPrice = (cart) => {
    let totalPrice = 0;
    cart.items.forEach(item => {
        totalPrice += item.itemPrice;
    });
    return totalPrice;
}

const mappingElementData = async (cart) => {
    cart.items = await cartItemService.getByCartId(cart.id);
    cart.totalPrice = calculationTotalPrice(cart);
    return cart;
}

module.exports = {
    calculationTotalPrice,
    mappingElementData
}