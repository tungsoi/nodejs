const {Cart} = require('../client/database/PostgreSql');
const BaseRepository = require('./BaseRepository');

class CartRepository extends BaseRepository {
    constructor() {
        super(Cart);
    }
}

module.exports = new CartRepository();