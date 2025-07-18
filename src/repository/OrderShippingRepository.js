const {OrderShipping} = require('../client/database/PostgreSql');
const BaseRepository = require('./BaseRepository');

class OrderShippingRepository extends BaseRepository {
    constructor() {
        super(OrderShipping);
    }

    async getByOrderId(id) {
        return this.model.findAll({where: {order_id: id}});
    }
}

module.exports = new OrderShippingRepository();