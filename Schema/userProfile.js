const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    email:{
        type: String, 
        required: true, 
        unique: true, 
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    img: { data: Buffer, contentType: String },
    name: String,
    age: Number,
    height: Number,
    weight: Number,
    fitnessGoal: String,
    level: Number,
    equipments: String,
});

module.exports = mongoose.model('Profile', profileSchema);