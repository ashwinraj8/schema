const mongoose = require('mongoose');

const workSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    excName: {
        type: String,
        required: true
    },
    type: String,
    description: String,
    //ageGroup: ,
    BMI: Number,
    group: Number,
    level: Number,
    goal: String

});

module.exports = mongoose.model('Work', workSchema);