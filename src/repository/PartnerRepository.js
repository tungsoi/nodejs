const {Partner} = require('../client/database/PostgreSql');
const BaseRepository = require('./BaseRepository');

class PartnerRepository extends BaseRepository {
    constructor() {
        super(Partner);
    }
}

module.exports = new PartnerRepository();