const {Order} = require('../client/database/PostgreSql');
const BaseRepository = require('./BaseRepository');

class OrderRepository extends BaseRepository {
    constructor() {
        super(Order);
    }
}

module.exports = new OrderRepository();