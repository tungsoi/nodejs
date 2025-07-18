const {Order} = require('../client/database/PostgreSql');
const BaseRepository = require('./BaseRepository');

class OrderRepository extends BaseRepository {
    constructor() {
        super(Order);
    }

    async getOrderByCustomerId(id) {
        return this.model.findAll({where: {customer_id: id}});
    }
}

module.exports = new OrderRepository();