const BaseManager = require('./BaseManager');
const service = require('../service/PositionService');

class PositionManager extends BaseManager {
  constructor() {
    super(service);
  }
}

module.exports = new PositionManager();