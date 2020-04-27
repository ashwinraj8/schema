let mongoose = require('mongoose');

let shopSchema = new mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
    }
})

module.exports = mongoose.model('Subscriber',shopSchema);