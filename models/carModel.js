var mongoose = require('mongoose');
  Schema = mongoose.Schema;

var carModel = new Schema({
    make: {type: String},
    model: {type: String},
    color: {type: String},
    AC: {type: Boolean},
    GPS: {type: Boolean}
});

module.exports = mongoose.model('Car', carModel);
