const {OrderItem} = require('../client/database/PostgreSql');
const BaseRepository = require('./BaseRepository');

class OrderItemRepository extends BaseRepository {
    constructor() {
        super(OrderItem);
    }
}

module.exports = new OrderItemRepository();