var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    Bolagsnamn: {type: String, required: true},
    ISIN: {type: String, required: true},
    Ticker: {type: String, required: true},
    Aktiekurs: {type: Number, required: true},
    Lista: {type: String, required: true},
    Land: {type: String, required: true},
    Bransch: {type: String, required: true},
    Börsvärde: {type: Number, required: true}
});

module.exports = mongoose.model('Stock', schema);