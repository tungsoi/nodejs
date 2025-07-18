const {Example} = require('../client/database/PostgreSql');
const BaseRepository = require('./BaseRepository');

class ExampleRepository extends BaseRepository {
    constructor() {
        super(Example);
    }
}

module.exports = new ExampleRepository();