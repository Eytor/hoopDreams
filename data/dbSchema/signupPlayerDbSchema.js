const Schema = require('mongoose').Schema;

module.exports = new Schema({
  playerId: {type: String, required: true},
  pickupGameId: {type: String, required: true}
});
