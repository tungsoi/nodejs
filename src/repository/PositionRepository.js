const {Position} = require('../client/database/PostgreSql');
const BaseRepository = require('./BaseRepository');

class PositionRepository extends BaseRepository {
    constructor() {
        super(Position);
    }
}

module.exports = new PositionRepository();