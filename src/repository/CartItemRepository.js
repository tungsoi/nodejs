const {CartItem} = require('../client/database/PostgreSql');
const BaseRepository = require('./BaseRepository');

class CartItemRepository extends BaseRepository {
    constructor() {
        super(CartItem);
    }

    async getByCartId(cartId) {
        return this.model.findAll({where: {cartId}});
    }

    async findOne(cartId, productId) {
        return this.model.findOne({where: {cartId, productId}});
    }
}

module.exports = new CartItemRepository();