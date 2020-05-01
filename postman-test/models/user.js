let mongoose = require('mongoose');

let USchema = mongoose.Schema({

    desc:String
});

module.exports = mongoose.model('User',USchema,'users');