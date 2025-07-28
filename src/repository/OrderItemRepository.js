const {OrderItem} = require('../client/database/PostgreSql');
const BaseRepository = require('./BaseRepository');

class OrderItemRepository extends BaseRepository {
    constructor() {
        super(OrderItem);
    }

    async getByOrderId(id) {
        return this.model.findAll({where: {order_id: id}});
    }

    async findOne(orderId, productId) {
        return this.model.findOne({where: {orderId, productId}});
    }
}

module.exports = new OrderItemRepository();