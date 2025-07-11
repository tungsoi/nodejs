const BaseManager = require('./BaseManager');
const service = require('../service/PartnerService');

class PartnerManager extends BaseManager {
  constructor() {
    super(service);
  }
}

module.exports = new PartnerManager();