const {Product} = require('../client/database/PostgreSql');
const BaseRepository = require('./BaseRepository');

class ProductRepository extends BaseRepository {
    constructor() {
        super(Product);
    }
}

module.exports = new ProductRepository();