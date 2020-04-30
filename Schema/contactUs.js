let mongoose = require('mongoose');

let shopSchema = new mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    name:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: Number,
        minlength: 10,
        maxlength: 12
    },
    email:{
        type:String,
        required:true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    },
    message:{
        type:String,
        maxlength: 100
    }
})

module.exports = mongoose.model('Subscriber',shopSchema);