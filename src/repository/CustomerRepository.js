const {Customer} = require('../client/database/PostgreSql');
const BaseRepository = require('./BaseRepository');

class CustomerRepository extends BaseRepository {
    constructor() {
        super(Customer);
    }
}

module.exports = new CustomerRepository();