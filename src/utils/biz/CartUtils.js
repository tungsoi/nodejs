const cartItemService = require("../../service/CartItemService");
const productService = require("../../service/productService");

const attachProductToItems = async (items) => {
    await Promise.all(
        items.map(async (item) => {
            item.product = await productService.getById(item.productId);
        })
    );
    return items;
}

const attachItemsToCart = async (items, cartId) => {
    await Promise.all(
        items.map(async (item) => {
            const productId = item.productId;
            const quantity = item.quantity;
            if (!productId || quantity == null) return;

            const existingItem = await cartItemService.findOne(cartId, productId);
            if (quantity <= 0 && existingItem) {
                await cartItemService.delete(existingItem.id);
            } else if (existingItem) {
                await cartItemService.update(existingItem.id, { quantity });
            } else if (quantity > 0) {
                await cartItemService.create({ cartId, productId, quantity });
            }
        })
    );
}

const calculationTotalPrice = (cart) => {
    let totalPrice = 0;
    cart.items.forEach(item => {
        totalPrice += item.itemPrice;
    });
    return totalPrice;
}

const enrichCartData = async (cart) => {
    cart.items = await cartItemService.getByCartId(cart.id);
    cart.totalPrice = calculationTotalPrice(cart);
    return cart;
}

module.exports = {
    attachProductToItems,
    attachItemsToCart,
    enrichCartData,
    calculationTotalPrice,
}