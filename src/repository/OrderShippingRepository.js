const {OrderShipping} = require('../client/database/PostgreSql');
const BaseRepository = require('./BaseRepository');

class OrderShippingRepository extends BaseRepository {
    constructor() {
        super(OrderShipping);
    }
}

module.exports = new OrderShippingRepository();