const {Customer} = require('../client/database/PostgreSql');
const BaseRepository = require('./BaseRepository');

class CustomerRepository extends BaseRepository {
    constructor() {
        super(Customer);
    }

    async getByPhone(phone) {
        return this.model.findOne({where: {phone: phone}});
    }
}

module.exports = new CustomerRepository();