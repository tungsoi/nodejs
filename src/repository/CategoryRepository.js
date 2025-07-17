const {Category} = require('../client/database/PostgreSql');
const BaseRepository = require('./BaseRepository');

class CategoryRepository extends BaseRepository {
    constructor() {
        super(Category);
    }
}

module.exports = new CategoryRepository();