const {CartItem} = require('../client/database/PostgreSql');
const BaseRepository = require('./BaseRepository');

class CartItemRepository extends BaseRepository {
    constructor() {
        super(CartItem);
    }
}

module.exports = new CartItemRepository();