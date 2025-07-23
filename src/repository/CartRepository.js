const {Cart} = require('../client/database/PostgreSql');
const BaseRepository = require('./BaseRepository');

class CartRepository extends BaseRepository {
    constructor() {
        super(Cart);
    }

    async getCartByUserId(userId) {
        return this.model.findOne({where: {userId: userId}});
    }

    async getCartByGuestToken(guestToken) {
        return this.model.findOne({where: {guestToken: guestToken}});
    }
}

module.exports = new CartRepository();