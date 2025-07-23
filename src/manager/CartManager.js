const BaseManager = require('./BaseManager');
const service = require('../service/CartService');

class CartManager extends BaseManager {
    constructor() {
        super(service);
    }

    async getCartByUserId(userId) {
        return await this.service.getCartByUserId(userId);
    }

    async getCartByGuestToken(guestToken) {
        return await this.service.getCartByGuestToken(guestToken);
    }
}

module.exports = new CartManager();