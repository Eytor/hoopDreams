const Schema = require('mongoose').Schema;

module.exports = new Schema({
  start: {type: String, required: true},
  end: {type: String, require: true},
  basketballFieldId: {type: String, required: true},
  hostId: {type: String, required: true}
});
