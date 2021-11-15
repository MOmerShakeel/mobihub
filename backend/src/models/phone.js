const mongoose = require('mongoose');
const Brand  = require('../models/brand')

const phoneSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    slug:{
        type: String,
        required: true,
        unique: true
    },
    phoneImage: {
        type:String
    },
    brand:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Brand', required: true
    }
});

module.exports = mongoose.model('Phone', phoneSchema);